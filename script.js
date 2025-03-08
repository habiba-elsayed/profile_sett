 function showSection(sectionId) {
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
            
            document.querySelectorAll('.sidebar button').forEach(button => {
                button.classList.remove('active');
            });
            document.querySelector(`.sidebar button[onclick="showSection('${sectionId}')"]`).classList.add('active');
        }