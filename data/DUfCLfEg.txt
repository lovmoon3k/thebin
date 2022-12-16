#!/usr/bin/python3
"""a module that fetches https://alx-intranet.hbtn.io/status"""
from urllib import request


if __name__ == "__main__":
    page = request.Request("https://intranet.hbtn.io/status")
    with request.urlopen(page) as fetch:
        content = fetch.read()
        print("Body response:")
        print("\t- type: {}".format(type(content)))
        print("\t- content: {}".format(content))
        print("\t- utf8 content: {}".format(content.decode("utf-8")))
