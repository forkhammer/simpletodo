FROM python:3.5
LABEL Name=todo Version=0.0.1 

COPY requirements.txt /var/www/

RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential
     
RUN pip install -r /var/www/requirements.txt

RUN groupadd -g 1000 -r user && useradd -r -g user -u 1000 user
WORKDIR /var/www
USER user
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]