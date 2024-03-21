This repo shows how to implement a sample cache endpoint and how to do a multi-record load for redirects.

The SampleCache endpoint caches book entries in this example.  To call it you would make a GET like:
```
curl --location 'https://YOURHARPERDB/SampleCache/The Hobbit' --header 'Authorization: Basic SERCX0FETUlOOjE0MDA='
```
The cache will call out to the origin if the entry does not exist or is expired.


The Redirect sample code is currently pseudo-code that is a starting point for collaboration on how we can load with validating off of existing records and performing fetches to get redirects.
We did create a sample data model in the schema.graphql based on information shared with us.
