import scrapy
from django.http import JsonResponse


class EcoLensSpider(scrapy.Spider):

    def __init__(self, start_urls):
        self.start_urls = start_urls
        self.scrape_response = {}
        
    name = 'ecolensspider'
    test_data = {
        'name': 'The Anchor',
        'post_code': 'E14 6HY',
        'street_number': '54',
        'location': {
            'longitude': 127,
             'latitude': 63,
            }
        }
    json_test_data = JsonResponse(test_data)

    def start_requests(self):

        for url in self.start_urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        self.scrape_response = response.data
