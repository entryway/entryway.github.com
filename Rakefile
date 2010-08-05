desc 'deploy site to specified environment, ie rake deploy[staging] or rake deploy[production].'
task :deploy, :environment do |t, args|
  require 'rubygems'
  require 'highline/import'
  require 'net/ssh'

  subdomain = args[:environment] || 'staging'
  branch = args[:branch] || 'develop'
  if subdomain == 'production'
    subdomain = 'www'
    branch = 'master'
  end

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
mv _site ../_public
mv ../public _old
mv ../_public ../public
rm -rf _old
EOF
    commands = commands.gsub(/\n/, "; ")
    ssh.exec commands
  end
end

