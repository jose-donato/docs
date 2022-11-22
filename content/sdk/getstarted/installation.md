---
title: Installation
sidebar_position: 2
---

## Conda Installation

The bundled installation versions of the OpenBB Terminal are currently incompatible with the OpenBB SDK. To install the OpenBB SDK, please follow the instructions below.

:::note

- Users updating from version < 1.9 will also need to remove and rebuild the existing Python virtual environment.
- If Anaconda3 is installed on the system, or the AARCH/ARM version of Miniconda, and its only purpose is for hosting the OpenBB platform, please uninstall prior to proceeding.
- In MacOSX, use a bash terminal profile and not zsh.
:::

<details>
 <summary><code>Removing the Old Environment</code></summary>

To prepare an existing installation for upgrading, follow these steps:

1. Exit the OpenBB Terminal
2. Enter: `conda deactivate`
3. Enter: `conda env remove -n obb` (If the environment was given a name other than `obb`, replace with it)
4. Enter: `conda clean -a` (enter Y when prompted)
5. Enter: `conda update -n base -c -conda-forge conda` (enter Y when prompted)

</details>

### Python Version Support

As part of the installation process, Python 3.9.6 will be installed. While other versions may work, the dependency tree is optimized for this version specifically. If the system targeted for installation does not have any version of Python installed, Python3 will be installed as part of [Miniconda3]. The version of Python will be updated when the OpenBB virtual environment is created during installation. While the process may feel intimidating to a new user, the majority of the work is copying and pasting the commands to run.

### Install Miniconda3

There are specific versions of packages, sourced only from Conda-Forge, which is why we specifically recommend installing within a freshly-made Conda Python environment. Make sure that the version of Miniconda3 installed is the x86/x64 version, no matter what CPU architecture the system has.

Windows users should install [Git for Windows](https://git-scm.com/download/win), and run terminals with `git bash` instead of `CMD` or `PowerShell`.

![Screenshot_20221119_010506](https://user-images.githubusercontent.com/85772166/202871659-9c93d87e-220e-48c2-aa7c-83dfe00b19d6.png)

Download and install the appropriate version of Miniconda3 for the system:

[MacOSX](https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.pkg)

[Windows](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe)

[Linux](https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh)

**Note:** When installing Miniconda3, there will be an option to select the destination folder. Choose a dedicated path like: `/Users/username/miniconda3/`

### Terminal Shell Profile

Open a terminal window, using a bash profile (Windows: cmd.exe) and activate the base environment:

- On MacOSX, enter:

```shell
    source /path/to/miniconda3/bin/activate
    conda init bash
```

- Windows/Linux, enter:

```shell
    C:/path/to/miniconda3/Scripts/activate
    conda init bash
```

Close the terminal window and re-open it.

### Install Git and Clone the OpenBB GitHub Repository

The base environment is confirmed to be activated when `(base)` appears in the command line, before the path. Entering `conda -V` on the command line will print the version of Conda installed. As of writing, the latest version is `22.9.0`. Navigate to a path where the files will be stored locally, such as: `/Users/username/GitHub`, then install git:

```shell
conda install -c conda-forge git
```

Now clone the OpenBB repo:

```shell
git clone https://github.com/OpenBB-finance/OpenBBTerminal.git
```

This will transfer approximately 2GB of data to the local folder. An addtional 2GB will be required for installing dependencies.

### Navigate into the Cloned Folder

```shell
cd OpenBBTerminal
```

### Create the Conda Python Environment

```shell
conda env create -n obb --file build/conda/conda-3-9-env-full.yaml
```

This will install some, but not all dependencies. It is important for this step to happen ***before*** the next steps.

### Activate the Environment

```shell
conda activate obb
```

**Note:** When opening new terminal windows, the `obb` environment will need to be activated every time.

### Install Git (again), Within the `obb` Environment

Ensure the `obb` environment is active, and then enter:

```shell
conda install -c conda-forge git
```

### Install the Remaining Depedencies with Poetry

```shell
poetry install -E prediction
poetry install -E jupyterlab
```

This process concludes with a message, where x is the current version number:

```shell
Installing the current project: OpenBBTerminal (x.x.x)
```

### Installation Complete

The OpenBB Terminal can now be launched from the command line with, `python terminal.py`, and the SDK can be initiated in an interactive window or Jupyter Notebook running a cell with: `from openbb_terminal.sdk import openbb`

## Installation Troubleshooting

The most common problems encountered are:

- "no module named: dotenv", or similar:

    - Typically because the `obb` environment has not been activated for the session. `conda activate obb`

- `poetry install` fails:

    - This can happen when the version of Conda (or old packages stored in cache are installed) is not x86/x64 architecture. If it fails regardless, try:

        - `pip install -r requirements-full.txt`
        - then try again: `poetry install -E prediction`

- Forecasting features not installed after updating the version:

    - This can happen when the version of Conda (or packages remaining in cache that were unknowingly installed) is not x86/x64 architecture. This will also occur where Anaconda3 is installed as the active Python environment manager. Follow the steps under, [Removing the Old Environment](https://openbb-finance.github.io/SDK/getstarted/setup/#removing-the-old-environment).

- Can't import the OpenBB SDK to a Notebook:

    - Ensure the selected kernel is one created during installation. For browser-based sessions, the interactive kernel will be named: `Python3 (ipykernel)`

Users continuing to experience errors should contact us, by email to, support@openbb.co. Please include basic system information, the point of failure, any steps taken prior to the failure, and any relevant screenshots or stack tracebacks.
