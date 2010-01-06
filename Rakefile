desc "deploy site to staging.entryway.net"
task :deploy do
  require 'rubygems'
  require 'highline/import'
  require 'net/ssh'
 
  branch = 'master'
  path = '/var/www/'
  site = 'staging.entryway.net'
  site_path = path + site
  temp_site_path = path + '_' + site

  username = ask('Username: ') { |q| q.echo = true }
  password = ask('Password: ') { |q| q.echo = "*" }
 
  Net::SSH.start('another.entryway.net', username, :password => password) do |ssh|
    commands = <<EOF
cd #{site_path}
git checkout #{branch}
git pull origin #{branch}
git checkout -f
jekyll --no-auto
rm *.*
cp _site/*.* .
rm -rf _site
EOF
    commands = commands.gsub(/\n/, "; ")
    ssh.exec commands
  end
end

