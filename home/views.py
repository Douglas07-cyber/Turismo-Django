from django.shortcuts import render
from .models import Pacote
from .form import ContatoForms
from django.core.mail import send_mail
from django.contrib import messages

# Create your views here.
def principal(request):
    pacotes = Pacote.objects.all().order_by('-created_at')
    
    if request.method == 'POST':
         form = ContatoForms(request.POST)
         if form.is_valid():
            # Aqui posso processar os dados do formulário, como enviar um e-mail ou salvar no banco
            nome = form.cleaned_data['nome']
            telefone = form.cleaned_data['telefone']
            mensagem = form.cleaned_data['mensagem']
            
            # posso enviar um e-mail ou fazer qualquer ação necessária com os dados
            # Por exemplo, usando a função de envio de e-mails do Django:
            
            send_mail(
                f"Mensagem de {nome}",
                f"Mensagem: {mensagem} Contato: {telefone}",
                telefone,
                ['douglasnunes224@gmail.com'],
                fail_silently=False,
            )
            
            
            # Depois de processar, posso redirecionar ou renderizar uma página de sucesso
            messages.info(request, 'Email enviado com sucesso, em breve o administrador vai entrar em contato')
            form = ContatoForms()
            return render(request, 'home/principal.html', {'pacotes':pacotes, 'form': form})
           
    else:
        form = ContatoForms()

    
    
    return render(request, 'home/principal.html', {'pacotes':pacotes, 'form': form})