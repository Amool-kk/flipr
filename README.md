<a name="top"></a>

NOTES REST Api

Use `.env.example` as reference to create a `.env` file in the `backend` folder. And simply run `docker compose up` to start the database, backend server, and mongo-express server.

# Table of contents

- [Auth](#Auth)
  - [Login](#Login)
  - [Logout](#Logout)
  - [Register](#Register)
- [Notes](#Notes)
  - [Create Note](#Create-Note)
  - [Delete Note](#Delete-Note)
  - [Retreive Notes](#Retreive-Notes)
  - [Retreive Notes by id](#Retreive-Notes-by-id)
  - [Update Note](#Update-Note)

___


# <a name='Auth'></a> Auth

## <a name='Login'></a> Login
[Back to top](#top)

<p>Login User based on email and password [Generate Tokens]</p>

```
POST /auth/register/
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>User Email</p> |
| password | `String` | <p>User Password</p> |

### Examples

CURL Example:

```curl
curl -X POST -d email=foo[at]bar.com -d password=******
```


## <a name='Logout'></a> Logout
[Back to top](#top)

<p>Logout User [Clear Cookie]</p>

```
POST /auth/logout
```

### Header examples

Cookie:

```json
{
  Cookie: access_token={access_token}
}
```

### Examples

CURL Example:

```curl
curl -X POST --cookie "access_token={access_token}"
```


## <a name='Register'></a> Register
[Back to top](#top)

<p>Register User based on email and password</p>

```
POST /auth/register/
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>User Email</p> |
| password | `String` | <p>User Password</p> |

### Examples

CURL Example:

```curl
curl -X POST -d email=foo[at]bar.com -d password=******
```


# <a name='Notes'></a> Notes

## <a name='Create-Note'></a> Create Note
[Back to top](#top)

<p>Create Note</p>

```
POST /notes/
```

### Header examples

Cookie:

```json
{
  Cookie: access_token={access_token}
}
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| title | `String` | <p>Title for note</p> |
| tags | `String` | <p>Tags for note</p> |
| desc | `String` | <p>Description for note</p> |

### Examples

CURL Example:

```curl
curl -X POST --cookie "access_token={access_token} http://localhost:3000/notes -d title=testTitle -d desc=testDesc
```


## <a name='Delete-Note'></a> Delete Note
[Back to top](#top)

<p>Delete Note</p>

```
DELETE /notes/
```

### Header examples

Cookie:

```json
{
  Cookie: access_token={access_token}
}
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>id of note to delete</p> |

### Examples

CURL Example:

```curl
curl -X DELETE --cookie "access_token={access_token} http://localhost:3000/notes -d id=200"
```


## <a name='Retreive-Notes'></a> Retreive Notes
[Back to top](#top)

<p>Get All Notes</p>

```
GET /notes/
```

### Header examples

Cookie:

```json
{
  Cookie: access_token={access_token}
}
```

### Examples

CURL Example:

```curl
curl -X GET --cookie "access_token={access_token} http://localhost:3000/notes"
```


## <a name='Retreive-Notes-by-id'></a> Retreive Notes by id
[Back to top](#top)

<p>Get Note by id</p>

```
GET /notes/:id
```

### Header examples

Cookie:

```json
{
  Cookie: access_token={access_token}
}
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Notes ID</p> |

### Examples

CURL Example:

```curl
curl -X GET --cookie "access_token={access_token} http://localhost:3000/notes/200"
```


## <a name='Update-Note'></a> Update Note
[Back to top](#top)

<p>Update Note</p>

```
PUT /notes/
```

### Header examples

Cookie:

```json
{
  Cookie: access_token={access_token}
}
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| title | `String` | <p>Title for updated note</p> |
| tags | `String` | <p>Tags for updated note</p> |
| desc | `String` | <p>Description for updated note</p> |
| id | `String` | <p>id of note to update</p> |

### Examples

CURL Example:

```curl
curl -X PUT --cookie "access_token={access_token} http://localhost:3000/notes -d title=testTitle -d desc=testDesc -d id=200"
```


