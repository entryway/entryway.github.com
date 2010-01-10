desc 'deploy site to specified environment rake deploy[production], staging is the default'
task :deploy, :environment do |t, args| 
  require 'rubygems'
  require 'highline/import'
  require 'net/ssh'
 
  subdomain = args[:environmnet] || 'staging'
  subdomain = 'www' if subdomain == 'production'

  branch = 'master'
  site = "#{subdomain}.entryway.net"

  username = ask('Username: ') { |q| q.echo = true }
  password = ask('Password: ') { |q| q.echo = "*" }
 
  Net::SSH.start('another.entryway.net', username, :password => password) do |ssh|
    commands = <<EOF
cd ~/#{site}/cached-copy
git checkout #{branch}
git pull origin #{branch}
git checkout -f
rm -rf _site
jekyll --no-auto
mv _site ../_#{branch}
mv ../#{branch} _old
mv ../_#{branch} ../#{branch}
rm -rf _old
EOF
    commands = commands.gsub(/\n/, "; ")
    ssh.exec commands
  end
end

