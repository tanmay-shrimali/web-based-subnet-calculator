![screenshot](https://github.com/tanmay-shrimali/web-based-subnet-calculator/assets/119653072/12181a89-0a8b-444e-86cb-ab1b979d0e70)

# Subnet Mask Calculator

The Subnet Mask Calculator is a web-based tool that allows users to calculate the network address, subnet bits, and total number of hosts in a given IP address and subnet mask combination. It provides additional options such as subnetting, variable-length subnet masking (VLSM), CIDR notation support, reverse DNS lookup, wildcard mask calculations, host address range determination, network class identification, binary representation display, and IPv6 support. This calculator helps network administrators, IT professionals, and students in designing and managing IP networks effectively.

## Importance of Subnet Calculators

Subnet calculators are essential tools for network planning and management. They allow administrators to efficiently allocate IP addresses, optimize network resources, and ensure proper addressing schemes. Some key benefits and importance of subnet calculators include:

- **IP Addressing**: Subnet calculators enable administrators to divide a network into smaller subnets, providing flexibility in assigning IP addresses to devices.

- **Network Planning**: By calculating network addresses, subnet bits, and total hosts, administrators can plan and design networks that suit their requirements and efficiently utilize IP address space.

- **Subnetting and VLSM**: Subnet calculators support subnetting and Variable-Length Subnet Masking (VLSM) techniques, allowing for efficient utilization of IP addresses by creating subnets of various sizes.

- **Troubleshooting**: Subnet calculators aid in troubleshooting network connectivity issues by identifying network addresses and determining if hosts are within the same subnet.

## Project Details

This subnet mask calculator project is built using HTML, CSS, and JavaScript. It provides the following parameters and functions:

### Parameters

- **IP Address**: Input field to enter the IP address for which subnet calculations will be performed.

- **Subnet Mask**: Input field to enter the subnet mask corresponding to the IP address.

- **Number of Subnets**: Input field to specify the desired number of subnets (optional).

### Functions

- **calculate()**: This function is triggered when the "Calculate" button is clicked. It retrieves the entered IP address, subnet mask, and number of subnets (if specified). It performs subnet mask calculations and displays the results.

- **countSetBits()**: A helper function that counts the number of set bits (1s) in a binary number. It is used to calculate the subnet bits in the subnet mask.

## Usage

To use the Subnet Mask Calculator, follow these steps:

1. Open the `index.html` file in a web browser.

2. Enter the IP address in the "IP Address" field.

3. Enter the subnet mask in the "Subnet Mask" field.

4. (Optional) Enter the desired number of subnets in the "Number of Subnets" field.

5. Click the "Calculate" button.

6. The results, including the network address, subnet bits, total hosts, and hosts per subnet (if applicable), will be displayed below.

7. Adjust the input values as needed and click "Calculate" again to perform additional calculations.

## Customization

Feel free to customize the project according to your requirements. You can modify the color palette by updating the CSS file (`style.css`). Additionally, you can enhance the functionality by incorporating additional features mentioned earlier or by extending the project to support other networking concepts.
