const copyContent = async () => {
    try {
      await navigator.clipboard.writeText("nick909_.");
      console.log('Content copied to clipboard');
      document.getElementById("statusicon").title = "Copied!";
    } catch (err) {
      console.error('Failed to copy: ', err);
      document.getElementById("statusicon").title = "Failed to copy... Check perms";
    }
  }
