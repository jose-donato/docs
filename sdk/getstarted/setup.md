---
title: Installation
sidebar_position: 1
---
Please note that the installation packages for the OpenBB Terminal, EXE & DMG bundles, are currently incompatible with the OpenBB Python SDK. It must be installed via the procedure outlined below. For any operating system, installing VS Code is a recommended tool for file and container management; editing presets, routines, and portfolio files; command line operations; and ensuring the local installation is up-to-date, via GitHub.

## **Installation**

We provide an installation method (copy & paste commands) that relies on a Python virtual environment to isolate the OpenBB SDK (and/or Terminal) from the rest of the system. OpenBB recommends a [`Conda`](https://docs.conda.io/en/latest/miniconda.html) virtual Python environment because there are optional features, such as `forecast`, which depend on libraries specifically sourced from `conda-forge`. Due to this, outside of a Conda environment, some features will be unavailable. As such, the installation steps will be written under the assumption that you are using Conda. The total size of an installation will be approximately 4GB.

**Important Notice:** For OpenBB Terminal versions < 1.9.1, or to upgrade a previous installation for the Forecast Menu, please take these additional steps first. Exit a Terminal session, and enter the commands below:

```python

    conda clean -a -y

    conda deactivate

    conda env remove -n obb -y

    conda clean -a -y

    conda update -n base -c conda-forge conda
```

### **Operating System Requirements**

The steps below are not specific to any particular O/S; however, the known minimum versions are:

  -  Windows 10
  -  MacOS Catalina

Community members have also had successful installations with:

  -  Linux (various builds)

        ```python
        mkdir -p ~/miniconda3
        wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
        bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
        rm -rf ~/miniconda3/miniconda.sh
        ~/miniconda3/bin/conda init bash
        ```

  -  Raspberry Pi (similar to a Linux installation)
  -  Some tablets with the ability to run Python and Jupyter/VS Code/Docker

**Additional Notes:**

  -  Forecasting features are not yet GPU-enabled.
  -  Many, but not all, of the forecast functions require the CPU to support the minimum requirements of the Intel MKL (SSSE3 + SSE4.2 instructions). There are no known work-arounds at this time.
  -  Initiate a bash terminal shell instead of zsh or other, and Windows users should use `CMD.exe` instead of PowerShell.
  -  Depending on the particular system, installation can be slower within an `ipykernel` session. The end result will be the same as one completed in a bash terminal shell.

### **Steps to Install**

1. **Install [Miniconda](https://docs.conda.io/en/latest/miniconda.html)**

    Download the `x86_64` Miniconda for your respective system and follow along with its installation instructions. The Miniconda architecture MUST be `x86_64` in order to use certain features.

2. **Open a Terminal Window & Install Git Within the Conda Base Environment**

    In VS Code, use the activity bar to view the Conda base environment. Activate it by clicking on the middle icon, "Open in Terminal".

    ![conda activate base](https://user-images.githubusercontent.com/85772166/201504674-42c13582-3211-43d2-98c4-ff29f31788b4.png "conda activate base")

    ```python
    conda install -c conda-forge git -y
    ```
    
    In a term

3. **Clone the GitHub Repo**

    ```python
    git clone https://github.com/OpenBB-finance/OpenBBTerminal.git   
    ```

    **Note:**  The command is slightly different within a Jupyter Notebook or interactive window:

    ```python
    conda run git clone https://github.com/OpenBB-finance/OpenBBTerminal.git
    ```

4. **Navigate Into the Cloned Folder**

    ```python
    cd OpenBBTerminal
    ```
    
    ![cd OpenBBTerminal](https://user-images.githubusercontent.com/85772166/201504723-c6fce3e6-063d-4851-b114-0d3a9c7e9833.png "cd OpenBBTerminal")

5. **Create Environment** (note: `obb` can be substituted for any monicker)

    ```python
    conda env create -n obb --file build/conda/conda-3-9-env-full.yaml
    ```
    
    ![conda env create](https://user-images.githubusercontent.com/85772166/201504757-57b8fe26-f552-4e3e-85a0-336989814e88.png "conda env create")  

6. **Activate the Environment**

    ```python
    conda activate obb
    ```

    If using VS Code, or Jupyter Labs, this is accomplished by clicking on the kernel selector, located in the right corner of the window, in the image where it says: "base".
    
    ![conda activate obb](https://user-images.githubusercontent.com/85772166/201504810-c65aa6a1-332f-428b-9b78-f8406788b48f.png "conda activate obb")

    There will be a pop-up dialogue requesting to install `ipykernel`, click on "Install".

    ![Install ipykernel](https://user-images.githubusercontent.com/85772166/201504828-3e8a4d2f-1c5f-4512-8e87-41f11ec0603b.png "Install ipykernel")

7. **Install Git Within the `obb` Environment**

    ```python
    conda install -c conda-forge git
    ```

8. **Install the Remaining Packages**

    ```python
    poetry install -E prediction
    ```

    For an interactive window or Jupyter Notebook add `conda run` to the command.

    ```python
    conda run poetry install -E prediction
    ```

    **Note:** If `poetry install` fails, try:

    ```python
    pip install -r requirements-full.txt
    ```

    Then, retry: `poetry install -E prediction`

A successful installation will conclude with an output message - `Installing the current project: OpenBBTerminal (version number)` - and a summary of package installations, similar to the screenshot below. It is now ready to use.

![Successful Install](https://user-images.githubusercontent.com/85772166/201504855-a232578c-b746-4441-9b05-75ce1767ca5a.png "Successfull Install")

The terminal application can be launched from within a Jupyter Notebook file with the command, `run terminal.py`; however, the Terminal experience is not intended for this type of environment. Notebook files, `ipynb`, and Python scripts are best suited for working within the OpenBB SDK layer. The next section will explain how to get started.
