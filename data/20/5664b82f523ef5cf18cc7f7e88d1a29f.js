callback({
  "levelNumber": 20,
  "size": 26,
  "steps": 109,
  "successRatio": 1,
  "author": "18111398",
  "hash": "5664b82f523ef5cf18cc7f7e88d1a29f",
  "path": "20-Multiplication-Workshop-15.109/26.109-18111398.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 26/15 - SPEED 109/109 --\n\n    JUMP     d\na:\n    INBOX   \n    COPYFROM 9\nb:\nc:\n    OUTBOX  \nd:\n    INBOX   \n    JUMPZ    a\n    COPYTO   0\n    COPYTO   1\n    INBOX   \n    JUMPZ    b\n    SUB      0\n    JUMPN    e\n    ADD      0\n    COPYTO   1\n    JUMP     f\ne:\n    ADD      0\n    COPYTO   0\nf:\n    COPYFROM 1\ng:\n    COPYTO   2\n    BUMPDN   0\n    JUMPZ    h\n    COPYFROM 1\n    ADD      2\n    JUMP     g\nh:\n    COPYFROM 2\n    JUMP     c\n\n\n"
});