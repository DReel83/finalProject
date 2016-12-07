# Shortr Link

Shortr Link is a URL shortener the utilizes Node, Express and MongoDB as the primary tecnologies. The main idea behind this app is to simply take a long URL from any website and shorten it into a more managable "Shortr Link". 

On a high level, the shortener stores the long URL to a document in the database and then converts the document id into a shortr.link end point which is then outputted to the user. When the user enters the short URL into their browser, they are taken to shortr.link and the endpoint is decoded back into the database id which in turn references the long URL to which the user is immediately redirected.