FROM openjdk:17-oracle
EXPOSE 8888

COPY ./target/config-server-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app

ENTRYPOINT ["java","-jar","config-server-0.0.1-SNAPSHOT.jar"]
