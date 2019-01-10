FROM python:3.6-slim

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 3000

ENV NAME=World

CMD [ "python3", "app.py" ]
