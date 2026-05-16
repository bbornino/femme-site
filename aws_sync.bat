REM Sync local files to S3 bucket, excluding certain files and directories, and setting cache control headers
REM This command will delete files in the S3 bucket that are not present in the local directory
REM Exclude .git directory, .bat files, and .vscode directory from being synced
REM Set cache control headers to prevent caching of files in the S3 bucket
REM Note: Make sure to run this script from the root directory of your project
REM Example usage: aws_sync.bat
REM Do not need to run anything prior in my personal repo

aws s3 sync . s3://femme.bornino.net --delete --exclude ".git/*" --exclude "*.bat" --exclude ".vscode/*" --cache-control "no-cache, no-store, must-revalidate"
