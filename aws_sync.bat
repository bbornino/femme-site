aws s3 sync . s3://femme.bornino.net --delete --exclude ".git/*" --exclude "*.bat" --exclude ".vscode/*" --cache-control "no-cache, no-store, must-revalidate"
