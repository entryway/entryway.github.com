
desc "Compiles all .less files in the stylesheets directory."
task :less do
 
 require 'less'
 
 directory = 'css/'
 stylesheets = Dir.entries(directory)
 
 stylesheets.each do |sheet|
  if(File.extname(sheet) == ".less")
   `lessc #{directory + sheet}`
  end
 end
end

desc "Deploy site to specified environment and branch, ie rake deploy[staging, experimental]."
task :deploy, :environment, :branch do |t, args| 
  require 'rubygems'
  require 'highline/import'
  require 'net/ssh'
 
  subdomain = args[:environment] || 'staging'
  branch = args[:branch] || 'master'
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

