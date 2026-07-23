# Create a user, then use the returned id to create 2 notes for that user

$userBody = @{
    username = "mluukkai"
    name     = "Matti Luukkainen"
    password = "salainen"
} | ConvertTo-Json

$userResponse = Invoke-WebRequest -Uri "http://localhost:3001/api/users" -Method Post -Body $userBody -ContentType "application/json"
$user = $userResponse.Content | ConvertFrom-Json
$userId = $user.id

Write-Output "Created user id: $userId"

$note1Body = @{
    content   = "HTML is easy"
    important = $true
    userId    = $userId
} | ConvertTo-Json

$note2Body = @{
    content   = "Browser can execute only JavaScript"
    important = $false
    userId    = $userId
} | ConvertTo-Json

$note1Response = Invoke-WebRequest -Uri "http://localhost:3001/api/notes" -Method Post -Body $note1Body -ContentType "application/json"
$note2Response = Invoke-WebRequest -Uri "http://localhost:3001/api/notes" -Method Post -Body $note2Body -ContentType "application/json"

$note1Response.StatusCode
$note1Response.Content
$note2Response.StatusCode
$note2Response.Content
