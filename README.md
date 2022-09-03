# Event Tracker Project

## Link

## Overview

This application's purpose is to give users the ability to look up specific rocks and their properties in their personal collection, but also be able to track the cleansing and charging dates of individual rocks. The user also has the ability to add, update, and delete rocks from their personal collection.

## REST Endpoints

| HTTP Verb | URI                      | Request Body            | Response Body  | Purpose |
|-----------|--------------------------|-------------------------|----------------|---------|
| GET       | `/api/rocks`             |                         | List of Rocks  | **List** or **collection** endpoint |
| GET       | `/api/rocks/{keyword}`   |                         | Single rock    | **Retrieve** endpoint |
| POST      | `/api/rocks`             | JSON for a new Rock     | Created rock   | **Create** endpoint |
| POST      | `/api/rocks/{id}`        | JSON for updating Rock  | Updated rock   | **Replace** endpoint |
| DELETE    | `/api/rocks/{id}`        |                         | Delete rock    | **Delete** route |

## Technologies Used

* Java
* Spring, Spring Boot
* Spring REST
* Gradle
* MySQL Workbench
* AWS
* Git


## Lessons Learned

* Writing REST query's for a search by keyword function. 
* Gained a better understanding of the simplification that Spring REST provides. 