FROM openjdk:17-oracle
EXPOSE 38695

COPY ./target/login-service-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app

ENTRYPOINT ["java","-jar","login-service-0.0.1-SNAPSHOT.jar"]
