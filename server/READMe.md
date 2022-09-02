## Follow Restful Design using [Microsoft Docs](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design) as your guide

 - `GET`: A `successful` GET method typically returns HTTP status code `200 (OK)`. 
    - If the `resource cannot be found`, the method should return `404 (Not Found)`.
    - If the `request was fulfilled but there is no response body included` in the HTTP response, then it should return HTTP status code `204 (No Content)`.