export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('concesses.index'),
      this.use('toDown'),
      this.reverse('toUp')
    );
    this.transition(
      this.childOf('#liquid-bind-demo'),
      this.use('toDown')
    );
    this.transition(
      this.fromRoute('vehicles'),
      this.toRoute('concesses.show'),
      this.use('toRight'),
      this.reverse('toLeft')
    );
    this.transition(
      this.fromRoute('concesses.preview'),
      this.toRoute('concesses.show'),
      this.use('toRight'),
      this.reverse('toLeft')
    );
}
