FROM openjdk:17-oracle
EXPOSE 43439

COPY ./target/signup-service-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app

ENTRYPOINT ["java","-jar","signup-service-0.0.1-SNAPSHOT.jar"]
