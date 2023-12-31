package routes

import (
	"LandTicket-Backend/handlers"
	"LandTicket-Backend/pkg/mysql"
	"LandTicket-Backend/repositories"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group){
	userRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerUser(userRepository)

	e.GET("/users", h.FindUsers)
	e.GET("/user/:id", h.GetUser)
}