

FROM python:3.9 AS backend
RUN mkdir /app
RUN mkdir /app/hotel_booking_server
RUN mkdir /pgadmin4
COPY ./hotel_booking_server /app/hotel_booking_server
COPY pyproject.toml /app
COPY config.yml /app
COPY servers.json /pgadmin4
ADD ./requirements.txt /app/requirements.txt
WORKDIR /app
ENV PYTHONPATH=${PYTHONPATH}:${PWD}
RUN pip3 install -r requirements.txt
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev