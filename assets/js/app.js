(function () {
    const linksNavegacao = document.querySelectorAll('.navbar a[href^="#"]');

    linksNavegacao.forEach(function (link) {
        link.addEventListener('click', function () {
            const destino = this.getAttribute('href');
            const secao = destino ? document.querySelector(destino) : null;

            if (!secao) {
                return;
            }

            secao.classList.remove('animar-transicao');
            void secao.offsetWidth;
            secao.classList.add('animar-transicao');
        });
    });
})();

(function () {
    const formAgendamento = document.getElementById('formAgendamento');
    const confirmacaoAgendamento = document.getElementById('confirmacaoAgendamento');
    const btnVoltarInicio = document.getElementById('btnVoltarInicio');
    const modalAgendamento = document.getElementById('modalAgendamento');

    if (!formAgendamento || !confirmacaoAgendamento || !btnVoltarInicio || !modalAgendamento) {
        return;
    }

    formAgendamento.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!formAgendamento.checkValidity()) {
            formAgendamento.reportValidity();
            return;
        }

        formAgendamento.classList.add('d-none');
        confirmacaoAgendamento.classList.remove('d-none');
    });

    modalAgendamento.addEventListener('show.bs.modal', function () {
        formAgendamento.reset();
        formAgendamento.classList.remove('d-none');
        confirmacaoAgendamento.classList.add('d-none');
    });

    btnVoltarInicio.addEventListener('click', function () {
        const instanciaModal = bootstrap.Modal.getOrCreateInstance(modalAgendamento);
        instanciaModal.hide();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
