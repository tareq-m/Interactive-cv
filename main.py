from bottle import route, run, template, static_file


@route('/')
def index():
    return template("index.html")


@route('/<filename:re:.*\.css>')
def css(filename):
    return static_file(filename, root='')


@route('/<filename:re:.*\.js>')
def js(filename):
    return static_file(filename, root='')


run(host='localhost', port=8080)
