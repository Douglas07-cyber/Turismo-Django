from django.shortcuts import render
from .models import Pacote

# Create your views here.
def principal(request):
    pacotes = Pacote.objects.all().order_by('-created_at')
    return render(request, 'home/principal.html', {'pacotes':pacotes})
