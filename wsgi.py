import os
from django.core.wsgi import get_wsgi_application

# ضبط مسار إعدادات Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Escale_Sport.settings')

# إنشاء كائن WSGI
application = get_wsgi_application()

# Vercel يتوقع وجود متغيّر 'app'
app = application
