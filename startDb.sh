RESULT=$( { docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres; } 2>&1 )
if echo "$RESULT" | grep "Error"; then
  echo -e "\033[91mError, could not start database. Is the container already running?\033[0m"
  exit 1
fi
echo -e "\033[32mDatabase started, running on localhost:5432\033[0m"