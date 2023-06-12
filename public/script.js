 <script>
        const qiao = document.getElementById('qiao');
        const gongde = document.getElementById('gongde');
        let count = parseInt(gongde.textContent);

        qiao.addEventListener('click', () => {
            count++;
            gongde.textContent = count;

            // 将 count 数据发送给服务器
            fetch('/updateCount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ count })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
        });
    </script>
