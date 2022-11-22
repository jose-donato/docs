---
title: Requirements
---

The OpenBB SDK is a set of tools for financial and data analysis. We recommend starting out with some experience in finance, markets, and Python. The purpose of this page is to outline some of the background information required to get the most out of the software.

Minimum of 8GB RAM
Minimum of 5GB free storage
High-speed internet connection

### Recommended System Requirements

- 16GB RAM or more
- Dedicated graphics card
- Additional storage for saved datasets
- A code editor, such as VS Code, with some extensions:

    - Jupyter
    - Jupyter Power Toys
    - Python Environment Manager
    - Python Extension Pack
    - mplstyle

- Chrome or Firefox
- Open Office

### Minumum System Requirements

- 8GB RAM or more
- 10MB Additional storage for saved datasets
- A code editor, such as VS Code
- Chrome or Firefox

### MacOS

The OpenBB platform requires MacOS Catalina or higher. The oldest Mac configuration known to work is a MacPro 3,1 (OS Catalina) and functions relying on the Intel Math Kernel (Forecast models like RNN) are not compatible with the CPU.

### Windows

Windows 10 or higher is required, and the user account should be have administrator priviliges.

Additionaly, its reccomended Windows users also install [Git for Windows](https://git-scm.com/download/win) and use `Git Bash` as the terminal application instead of CMD or PowerShell.

### Linux

The OpenBB platform can be installed on a variety of Linux distributions. Due to the large number of system configuration variables, we are unable to verify compatibility across all distributions. It is known to work with up-do-date versions of Ubuntu, Debian and Raspberry Pi. Any 32-bit distributions are incompatible. Generally, if the system installs Miniconda3 then the OpenBB Terminal should also be installable.

## Python

### View-Model-Control

OpenBB uses a [View-Model-Control](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) format for creating functionality in the terminal. For example:

```
openbb.economy.ycrv()

|    |   Maturity |   Rate |
|---:|-----------:|-------:|
|  0 |  0.0833333 |   3.93 |
|  1 |  0.25      |   4.34 |
|  2 |  0.5       |   4.61 |
|  3 |  1         |   4.74 |
|  4 |  2         |   4.51 |
|  5 |  3         |   4.28 |
|  6 |  5         |   3.99 |
|  7 |  7         |   3.92 |
|  8 | 10         |   3.82 |
|  9 | 20         |   4.13 |
| 10 | 30         |   3.92 |
```
Then the view:

```
openbb.economy.ycrv_chart()
```

![Screenshot 2022-11-21 at 4 29 17 PM](https://user-images.githubusercontent.com/85772166/203185342-f019414d-24e2-4d8a-a718-10eeedb59e8c.png)

Users should have some experience working with Python and be comfortable working from the command line. There are many online resources dedicated to learning the Python language, such as:

- [Python.org](https://www.python.org/about/gettingstarted/)
- [W3 Schools](https://www.w3schools.com/python/)
- [Python Wiki](https://wiki.python.org/moin/BeginnersGuide)

### Virtual Environments

- [Miniconda3](https://docs.conda.io/en/latest/miniconda.html)
- [Installing Python Packages](https://packaging.python.org/en/latest/tutorials/installing-packages/)

Virtual Python environments are containers for Python applications, and allows the operating system to remain unchanged. The OpenBB SDK is built on top of 300+ open-source libraries. The dependency tree is complex and the components are carefully selected to work with each other. This makes it critical to install the OpenBB SDK in an isolated, dedicated, virtual environment. We recommend a Conda virtual environment because this is currently the only package manager compatible with every function. Consequently, installations within a `venv` or other container will lack the ML and forecast features. The Forecast menu will not be installed unless:

- Miniconda3 is installed and the version is specifically x86/x64 architecture, regardless of the CPU-type.
- CMake must be installed within the environment created for the OpenBB installation.
     - `conda install -c conda-forge cmake`

It is not recommended to install in a Global environment, such as Homebrew or `usr/local/bin/python3`. Create and activate a new environment before installing the OpenBB SDK.

### GitHub

[GitHub](https://github.com/OpenBB-finance/OpenBBTerminal) is where the OpenBB source code is maintained. Cloning the [repository](https://github.com/OpenBB-finance/OpenBBTerminal.git) is recommended for those wishing to develop functions, inspect the source code, or be on the bleeding-edge of development. Syncing the local folder - `git pull` - to the main branch of the repository will keep the installation up-to-date, and `git checkout` provides a way to test development or contributor branchs. GitHub can also be used as a personal storage vault and take advantage of automated actions. It's a great place to build, store, and maintain small databases for free.

Users encountering bugs are encouraged to report them [here](https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose) by creating a new issue, if no open issue for the bug already exists.

### Common Python Libraries

A good way to learn about the Python language is to recognize the libraries which are frequently used and attempt to understand how they form the foundations for workflows. A working knowledge of the libraries listed below is recommended:

- Datetime
- JSON
- Math
- Matplotlib
- Numpy
- Pandas
- Plotly
- Quandl
- Requests
- URLlib3

The best way to learn is to get involved. Tinkering with the code from an open-source project is an excellent way to dabble.

## Resources for Finance

Below is a collection of useful websites:

- [Investopedia](https://www.investopedia.com/)
- [The Federal Reserve Economic Database](https://fred.stlouisfed.org/)
- [Options Industry Council](https://www.optionseducation.org/)
- [DTCC Learning](https://dtcclearning.com/)
- [Nasdaqtrader](https://nasdaqtrader.com/Trader.aspx?id=symbollookup)
- [EDGAR Full Text Search](https://www.sec.gov/edgar/search/#)
- [EDGAR Historical Documents](https://www.sec.gov/cgi-bin/srch-edgar)
- [US Government Open Data](https://data.gov/)
- [ECB Statistical Warehouse](https://sdw.ecb.europa.eu/)
- [AlphaVantage Academy](https://www.alphavantage.co/academy/)
- [FINRA](https://otce.finra.org/otce/home)
