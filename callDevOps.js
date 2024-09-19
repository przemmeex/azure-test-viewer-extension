function callAzureDevOpsAPI(url, sas, traceViewerUrl) {
  const xhr = new XMLHttpRequest();
  sas = sas.trim().replace(/^&/, '');
  var secureUrl = `${url}?restype=container&comp=list&${sas}`
 
  const match = url.match(/.*blob\.core\.windows\.net\/\w+/);
  const blobContainerURL = match ? match[0] : "";
  console.log("match",blobContainerURL )
  xhr.open("GET", secureUrl);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xhr.responseText, "text/xml");

      // Get all Blob elements
      const blobs = doc.querySelectorAll("Blob Name");

      // Extract and store blob names
      const names = [];
      for (const blob of blobs) {
        names.push(blob.textContent.trim());
      }

      // Display names under the button (assuming button has the provided ID)
      const titleElement = document.getElementById("mainTitle");
      if (titleElement) {
        const container = document.getElementById("linkContainer");
        container.innerHTML = ""; // Clear any existing links
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
        for (const name of names) {
          const completeBlobURL = `${blobContainerURL}/${name}?${sas}`
          const encodedSecureUrl = encodeURIComponent(completeBlobURL);
          const linkElement = document.createElement("a");
          linkElement.classList.add("link-item");
          linkElement.target = "_blank";
          linkElement.textContent = name;
          linkElement.href = `${traceViewerUrl}?trace=${encodedSecureUrl}`;
          container.appendChild(linkElement);
          container.appendChild(document.createElement("br"));
        }
      }

    } else {
      console.error("Request failed:", xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error("Network error:", xhr.statusText);
  };

  xhr.send();
}