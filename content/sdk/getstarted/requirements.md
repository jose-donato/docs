---
title: Requirements
sidebar_position: 1
---
### Requirements


Python 3.9

Basic understanding of the following Python Packages -

  -  Pandas
  -  Numpy
  -  Matplotlib
  -  Requests
  -  JSON

Computer with x specs


While enough to use most functions, additional modules (already installed dependencies) must be imported in order to manipulate data, and also to display inline images. Some of the most commonly used items will be:

  -  Datetime
  -  JSON
  -  Pandas
  -  Numpy
  -  Matplotlib
  -  Requests

The first code block, within the Python script or Jupyter Notebook file, we'll expand to include these general-purpose modules.

```python
import json
import requests
import pandas as pd
import numpy as np
from datetime import datetime
from matplotlib import pyplot as plt

from openbb_terminal.sdk import openbb

%matplotlib inline ##optional if using Jupyter Notebook
