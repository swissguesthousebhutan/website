#!/usr/bin/env python3

# https://www.swissguesthouse.bt/book

import os
import sys
import urllib.parse
from subprocess import Popen, PIPE

import bleach

if os.environ["REQUEST_METHOD"] != "POST":
	print("Location: /book.html")
	print()
	exit(0)

mail = """\
To: patrick@patrickpfeifer.net
Subject: www.swissguesthouse.bt web form booking request 
MIME-Version: 1.0
Content-Type: text/html

<!doctype html>
<html>
<body>
<p>
A new booking request was submitted at <a href="https://www.swissguesthouse.bt/book.html">swissguesthouse.bt/book.html</a>
<dl>
{fields}
</dl>
<p style="font-size: 80%;">
IP: <code>{ip}</code>
<br>
User-Agent: <code>{user_agent}</code>
</body>
<html>
"""

fields = []
for (name, value) in urllib.parse.parse_qsl(sys.stdin.read(512*2**10)):
	fields.append("<dt>%s</dt>" % bleach.clean(name))
	fields.append("<dd>%s</dd>" % bleach.clean(value))

mail = mail.format(
	fields="\n".join(fields),
	ip=os.environ["REMOTE_ADDR"],
	user_agent=os.environ["HTTP_USER_AGENT"],
)

p = Popen(["/usr/sbin/sendmail", "-ti"], stdin=PIPE)
p.communicate(bytes(mail, "utf-8"))

print("Location: /")
print()

# vim: set ts=4 sw=4 et:
