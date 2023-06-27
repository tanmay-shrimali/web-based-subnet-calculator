function calculate() {
    var ipAddress = document.getElementById('ip-address').value;
    var subnetMask = document.getElementById('subnet-mask').value;
    var numSubnets = parseInt(document.getElementById('num-subnets').value);
  
    var ipParts = ipAddress.split('.');
    var maskParts = subnetMask.split('.');
  
    // Validate IP address, subnet mask, and number of subnets inputs
    if (ipParts.length !== 4 || maskParts.length !== 4 || isNaN(numSubnets) || numSubnets < 1) {
      alert('Invalid IP address, subnet mask, or number of subnets!');
      return;
    }
  
    var networkAddress = '';
    var subnetBits = 0;
  
    // Calculate network address and subnet bits
    for (var i = 0; i < 4; i++) {
      var ipPart = parseInt(ipParts[i]);
      var maskPart = parseInt(maskParts[i]);
  
      if (isNaN(ipPart) || isNaN(maskPart) || ipPart < 0 || ipPart > 255 || maskPart < 0 || maskPart > 255) {
        alert('Invalid IP address or subnet mask!');
        return;
      }
  
      networkAddress += (ipPart & maskPart);
  
      if (i < 3) {
        networkAddress += '.';
      }
  
      subnetBits += countSetBits(maskPart);
    }
  
    var totalHosts = Math.pow(2, 32 - subnetBits) - 2;
    var hostsPerSubnet = Math.floor(totalHosts / numSubnets);
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <label>IP Address:</label>
      <span>${ipAddress}</span>
      <br />
      <label>Subnet Mask:</label>
      <span>${subnetMask}</span>
      <br />
      <label>Network Address:</label>
      <span>${networkAddress}</span>
      <br />
      <label>Subnet Bits:</label>
      <span>${subnetBits}</span>
      <br />
      <label>Total Hosts:</label>
      <span>${totalHosts}</span>
      <br />
      <label>Hosts per Subnet:</label>
      <span>${hostsPerSubnet}</span>
    `;
  }
  
  function countSetBits(number) {
    var count = 0;
    while (number) {
      count += number & 1;
      number >>= 1;
    }
    return count;
  }
  