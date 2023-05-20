### Scripts

    npm install - Install packages
    npm run build - Build script
    npm start - Start production server
    npm run dev - Start development server

# API Documentation

### Error Handling

    {
        "error": "This is a error message"
    }

### /api/booking/register

- `POST` Create a booking object in server session

  {
  "screeningId",
  }

##### Response

    {
        "bookingId",
        "seats": [],
        "movie": {}
        "pricing": {
            "amount": number
        }
        "email": null,
    }

### /api/booking/update

- `POST` Validates and updates booking details

##### Request

        {
            "bookingId",
            "screening",
            "tickets": [],
            "seats": [],
        }

##### Response

    200 OK
        {
            "bookingId",
            "seats": [],
            "movie": {}
            "pricing": {
                "amount": number
            }
        }

### /api/booking/checkout

- `POST` Checkout current booking session

  ##### Request

        {
            "bookingId": string,
            "screening": Screening,
            "tickets": Ticket[],
            "seats": number[],
            "pricing": {
                amountTotal: number;
            },
            "email": string | null,
        }

  ##### Response

        {
            "Bokningsdetaljer godkänd"
        }

- `GET` Checkout current booking session

  ##### Response

        {
            "bookingId": string,
            "screening": Screening,
            "tickets": Ticket[],
            "seats": number[],
            "pricing": {
                amountTotal: number;
            },
            "email": string | null,
        }

### /api/booking/confirm

- `POST` Checkout current booking session

  ##### Request

        {
            "bookingId": string,
            "screening": Screening,
            "tickets": Ticket[],
            "seats": number[],
            "pricing": {
                amountTotal: number;
            },
            "email": string | null,
        }

  ##### Response

        {
            "bookingId": string,
            "screening": Screening,
            "tickets": Ticket[],
            "seats": number[],
            "pricing": {
                amountTotal: number;
            },
            "email": string | null,
        }

### /api/auth/login

- `POST` Login user

  ##### Request

        {
            "email": string,
            "password": string
        }

  ##### Response

        {
            create "u-session cookie", {
                "id": strig,
                "name": string,
                "email": string,
            }
        }

### /api/auth/register

- `POST` Register user

  ##### Request

        {
            "email": "string",
            "password": "string"
        }

  ##### Response

        {

        }

### /api/auth/logout

- `GET` Logout user

  ##### Response

        {
            delete "u-session cookie"
        }

### /api/auth/update

- `GET` Update user

  ##### Response

        {
            "name": string,
            "email": string,
        }

### /api/payment

- `POST` Control payment

  ##### Request

        {
            "cardNumber": string,
            "ccv": string,
            "cardYear": number,
            "cardMonth": number,
            "bookingDeatails": {
                "bookingId": string,
                "screening": Screening,
                "tickets": Ticket[],
                "seats": number[],
                "pricing": {
                    amountTotal: number;
                },
                "email": string,
            }
        }

  ##### Response

        {
            "Payment valid", 200 status
        }

        {
            "Payment invalid", 400 status
        }

- `GET` Get seating from database

  ##### Response

        {
            "seating": number[]
        }
