FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app

COPY java-app/pom.xml .

COPY java-app/src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17-slim

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
