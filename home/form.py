from django import forms 


class ContatoForms(forms.Form):
    nome = forms.CharField(max_length=100, label='Nome')
    telefone = forms.CharField(
        max_length=15, 
        label='Telefone', 
        widget=forms.TextInput(attrs={'placeholder': '(99) 99999-9999'})
    )
    mensagem = forms.CharField(
        label='Mensagem',
        widget=forms.Textarea(attrs={'rows': 5})
    )