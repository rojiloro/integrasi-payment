package models

import "time"

// user models struct
type User struct {
	ID 				int		`json:"id" gorm:"primarykey:autoIncrement"`
	Fullname 		string	`json:"fullname" gorm:"type: varchar(255)"`
	Username 		string 	`json:"username" gorm:"type: varchar(255)"`
	Email 			string 	`json:"email" gorm:"type: varchar(255)"`
	Password 		string	`json:"password" gorm:"type: varchar(255)"`
	JenisKelamin 	string 	`json:"jenis_kelamin" gorm:"type: varchar(255)"`
	Telepon 		string 	`json:"telepon" gorm:"type : varchar(255)"`
	Alamat 			string 	`json:"alamat" gorm:"type : varchar(255)"`
	Role 			string 	`json:"role" gorm:"type: varchar(255)"`
	CreatedAt 		time.Time		`json:"-"`
	UpdatedAt 		time.Time		`json:"-"`
}

type UserResponse struct{
	Username string 		`json:"username" form:"username"`
}

func (UserResponse) TableName() string {
	return "users"
}