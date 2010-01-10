# Deploying

    rake deploy[:environment, :branch] 
    
:environment - can be staging or production, staging is the deafault
:branch - the branch to deploy to, defaults to master

## Environment 
#
to deploy to staging:
    rake deploy

to deploy to production:
    rake deploy[production]

## Branch

the master branch is deployed by default

deploying a different branch to staging for review
    rake deploy[staging, experimental-branch]

**Note** Master is the only branch that can be deployed to production, if another branch is attempted it will revert to master. 
