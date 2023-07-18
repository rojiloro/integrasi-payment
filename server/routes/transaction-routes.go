package routes

import (
	"LandTicket-Backend/handlers"
	"LandTicket-Backend/pkg/middleware"
	"LandTicket-Backend/pkg/mysql"
	"LandTicket-Backend/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	t := repositories.RepositoryTransaction(mysql.DB)
	h := handlers.HandlerTransaction(t)

	e.POST("/transaction", middleware.Auth(h.CreateTransaction))
	e.GET("/transaction", h.FindTransaction)
	e.GET("/transaction/:id", h.GetTransaction)
	e.GET("/transaction-user", middleware.Auth(h.GetTransactionByUser))

}
