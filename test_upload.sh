#!/bin/bash
rmtrash dist
rmtrash build
python3 setup.py sdist
python3 setup.py bdist_wheel
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
