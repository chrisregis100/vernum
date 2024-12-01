const fileInput = document.getElementById('fileInput');
const downloadLink = document.getElementById('downloadLink');
const convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', processVCF);

function processVCF(e) {
    e.preventDefault()

    if (!fileInput.files.length) {
      alert("Veuillez charger un fichier VCF.");
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const vcfData = event.target.result;
        const updatedVCF = vcfData.split('\n').map(line => {
          // Modification les lignes contenant les numéros béninois
          if (line.startsWith('TEL;CELL')) {
            const parts = line.split(':');
            const number = parts[1].trim();

            if (/^\+229\d{8}$/.test(number)) {
                // Ajouter "01" après "+229" pour les numéros béninois à 8 chiffres
                const localNumber = number.slice(4); // Retirer "+229"
                if (/^\d{8}$/.test(localNumber)) {
                    parts[1] = `+22901${localNumber}`;
                }
            } 
            // Traiter les numéros mal formatés (exemple : 556-162-62)
            else if (/^\d{3}-\d{3}-\d{2}$/.test(number)) {
                parts[1] = `+22901${number.replace(/-/g, '')}`; // Normaliser et préfixer
            }
            console.log(parts.join(':'));
            
            return parts.join(':');

          }
          
          return line; 
        }).join('\n');

        // Générer un nouveau fichier VCF
        const blob = new Blob([updatedVCF], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.classList.remove('hidden');
      };

    reader.readAsText(file);
  }