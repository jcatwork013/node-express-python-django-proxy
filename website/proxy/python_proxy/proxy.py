from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib import request
import json

class ProxyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_request('GET')

    def do_POST(self):
        self.send_request('POST')

    def do_PUT(self):
        self.send_request('PUT')

    def do_DELETE(self):
        self.send_request('DELETE')

    def send_request(self, method):
        try:
            url = 'http://localhost:3001' + self.path
            req = request.Request(url, method=method)
            
            for header, value in self.headers.items():
                req.add_header(header, value)

            if method in ['POST', 'PUT']:
                content_length = int(self.headers.get('Content-Length', 0))
                data = self.rfile.read(content_length)
                req.data = data

            with request.urlopen(req) as response:
                response_data = response.read()
                self.send_response(response.getcode())
                
                for header, value in response.headers.items():
                    self.send_header(header, value)
                
                self.end_headers()
                self.wfile.write(response_data)

        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))

def run_proxy_server(port=8001):
    server_address = ('', port)
    proxy_server = HTTPServer(server_address, ProxyHandler)
    print(f'Proxy server is running on http://localhost:{port}')
    proxy_server.serve_forever()

if __name__ == '__main__':
    run_proxy_server()
