let LicenseItem = document.querySelectorAll('.license-item');
let Radio = document.querySelectorAll('.radio');
let SelectedPlan = document.querySelector('.selected_plan')
let NumberInput = document.querySelector('.number_input')
let TextPrice = document.querySelector('.text_price')
let Btn = document.querySelector('.btn')

function showContent() {

    for (let i = 0; i < LicenseItem.length; i++) {
        LicenseItem[i].addEventListener('click', function (e) {
            if (!e.target.classList.contains('active')) {

                LicenseItem.forEach((f) => f.classList.remove('active'))
                Radio.forEach((r) => r.checked = false)

                this.classList.add('active');
                Radio[i].checked = true
                NumberInput.value = 1
                SelectedPlan.textContent = Radio[i].name
                TextPrice.textContent = '$ ' + Number(Radio[i].value) + ' us'
                NumberInput.addEventListener('click', () => {
                    TextPrice.textContent = '$ ' + Number(Radio[i].value) * Number(NumberInput.value) + ' us'
                })
            } else {
                this.classList.remove('active');
            }
        }
        )
    }

}
showContent();

