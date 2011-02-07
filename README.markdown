# Deploying

    rake deploy[:environment]

:environment - can be staging or production, staging is the deafault

## Environment
#
to deploy to staging:
    rake deploy

to deploy to production:
    rake deploy[production]

## Branch

Git Flow should be followed to manage releases.

The develop branch is deployed to staging.

The master branch is deployed to production.

## Server

jekyll --server --auto

