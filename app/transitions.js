export default function(){
  // Add your transitions here, like:
  this.transition(
    this.fromRoute('application'),
    this.toRoute('concess'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
