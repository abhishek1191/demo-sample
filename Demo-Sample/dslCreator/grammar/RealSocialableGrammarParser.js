// Generated from RealSocialableGrammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RealSocialableGrammarVisitor = require('./RealSocialableGrammarVisitor').RealSocialableGrammarVisitor;

var grammarFileName = "RealSocialableGrammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\'\u014d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002E\n\u0002\f\u0002\u000e\u0002H\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u0002M\n\u0002\f\u0002\u000e\u0002P\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "W\n\u0003\f\u0003\u000e\u0003Z\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004f\n\u0004\u0003\u0005\u0003\u0005\u0006",
    "\u0005j\n\u0005\r\u0005\u000e\u0005k\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b~\n",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0084\n\t\f\t\u000e\t\u0087",
    "\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0007\r\u009b\n\r\f\r\u000e\r\u009e",
    "\u000b\r\u0003\u000e\u0003\u000e\u0005\u000e\u00a2\n\u000e\u0003\u000f",
    "\u0003\u000f\u0007\u000f\u00a6\n\u000f\f\u000f\u000e\u000f\u00a9\u000b",
    "\u000f\u0003\u000f\u0007\u000f\u00ac\n\u000f\f\u000f\u000e\u000f\u00af",
    "\u000b\u000f\u0003\u000f\u0007\u000f\u00b2\n\u000f\f\u000f\u000e\u000f",
    "\u00b5\u000b\u000f\u0003\u000f\u0005\u000f\u00b8\n\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0007\u0010\u00bd\n\u0010\f\u0010\u000e\u0010",
    "\u00c0\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u00c7\n\u0011\f\u0011\u000e\u0011\u00ca\u000b\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0007\u0012\u00d0\n",
    "\u0012\f\u0012\u000e\u0012\u00d3\u000b\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00da\n\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u00ea\n\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018",
    "\u00ff\n\u0018\f\u0018\u000e\u0018\u0102\u000b\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u010f\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a",
    "\u0116\n\u001a\f\u001a\u000e\u001a\u0119\u000b\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0126\n\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c",
    "\u012d\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0005\u001c\u0135\n\u001c\u0007\u001c\u0137\n\u001c",
    "\f\u001c\u000e\u001c\u013a\u000b\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0005 \u014b\n \u0003 \u0002\u0002",
    "!\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>\u0002\u0005\u0003\u0002\u0012\u0013\u0005",
    "\u0002\u0006\u0006\u0014\u0017 !\u0003\u0002\u0018\u0019\u0153\u0002",
    "@\u0003\u0002\u0002\u0002\u0004S\u0003\u0002\u0002\u0002\u0006e\u0003",
    "\u0002\u0002\u0002\bg\u0003\u0002\u0002\u0002\no\u0003\u0002\u0002\u0002",
    "\fq\u0003\u0002\u0002\u0002\u000e}\u0003\u0002\u0002\u0002\u0010\u007f",
    "\u0003\u0002\u0002\u0002\u0012\u008a\u0003\u0002\u0002\u0002\u0014\u0090",
    "\u0003\u0002\u0002\u0002\u0016\u0095\u0003\u0002\u0002\u0002\u0018\u0097",
    "\u0003\u0002\u0002\u0002\u001a\u00a1\u0003\u0002\u0002\u0002\u001c\u00a3",
    "\u0003\u0002\u0002\u0002\u001e\u00b9\u0003\u0002\u0002\u0002 \u00c3",
    "\u0003\u0002\u0002\u0002\"\u00cd\u0003\u0002\u0002\u0002$\u00d6\u0003",
    "\u0002\u0002\u0002&\u00e9\u0003\u0002\u0002\u0002(\u00eb\u0003\u0002",
    "\u0002\u0002*\u00f3\u0003\u0002\u0002\u0002,\u00f7\u0003\u0002\u0002",
    "\u0002.\u00f9\u0003\u0002\u0002\u00020\u010e\u0003\u0002\u0002\u0002",
    "2\u0110\u0003\u0002\u0002\u00024\u0125\u0003\u0002\u0002\u00026\u012c",
    "\u0003\u0002\u0002\u00028\u013b\u0003\u0002\u0002\u0002:\u013d\u0003",
    "\u0002\u0002\u0002<\u013f\u0003\u0002\u0002\u0002>\u014a\u0003\u0002",
    "\u0002\u0002@A\u0007\u0003\u0002\u0002AB\u0007\"\u0002\u0002BF\u0007",
    "\u0004\u0002\u0002CE\u0007&\u0002\u0002DC\u0003\u0002\u0002\u0002EH",
    "\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002",
    "\u0002GI\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002IJ\u0005\u0004",
    "\u0003\u0002JN\u0007\u0004\u0002\u0002KM\u0007&\u0002\u0002LK\u0003",
    "\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002",
    "NO\u0003\u0002\u0002\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002",
    "\u0002QR\u0005\b\u0005\u0002R\u0003\u0003\u0002\u0002\u0002SX\u0005",
    "\u0006\u0004\u0002TU\u0007\u0005\u0002\u0002UW\u0005\u0006\u0004\u0002",
    "VT\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002",
    "\u0002XY\u0003\u0002\u0002\u0002Y\u0005\u0003\u0002\u0002\u0002ZX\u0003",
    "\u0002\u0002\u0002[\\\u0005,\u0017\u0002\\]\u0007\u0006\u0002\u0002",
    "]^\u0005*\u0016\u0002^f\u0003\u0002\u0002\u0002_`\u0005,\u0017\u0002",
    "`a\u0007\u0006\u0002\u0002ab\u0007\u001e\u0002\u0002bc\u0005*\u0016",
    "\u0002cd\u0007\u001f\u0002\u0002df\u0003\u0002\u0002\u0002e[\u0003\u0002",
    "\u0002\u0002e_\u0003\u0002\u0002\u0002f\u0007\u0003\u0002\u0002\u0002",
    "gi\u0007\u0007\u0002\u0002hj\u0005\u000e\b\u0002ih\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002",
    "\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0007\b\u0002\u0002n\t\u0003",
    "\u0002\u0002\u0002op\u0007\t\u0002\u0002p\u000b\u0003\u0002\u0002\u0002",
    "qr\u0005\n\u0006\u0002rs\u00056\u001c\u0002st\u0007\u0004\u0002\u0002",
    "t\r\u0003\u0002\u0002\u0002u~\u0005$\u0013\u0002v~\u0005\u0012\n\u0002",
    "w~\u0005&\u0014\u0002x~\u0005(\u0015\u0002y~\u0005\f\u0007\u0002z~\u0005",
    "\u0010\t\u0002{~\u0005\u001c\u000f\u0002|~\u0007&\u0002\u0002}u\u0003",
    "\u0002\u0002\u0002}v\u0003\u0002\u0002\u0002}w\u0003\u0002\u0002\u0002",
    "}x\u0003\u0002\u0002\u0002}y\u0003\u0002\u0002\u0002}z\u0003\u0002\u0002",
    "\u0002}{\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002\u0002~\u000f\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0007\n\u0002\u0002\u0080\u0085\u0005",
    ",\u0017\u0002\u0081\u0082\u0007\u0005\u0002\u0002\u0082\u0084\u0005",
    ",\u0017\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0087\u0003",
    "\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003",
    "\u0002\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0085\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0007\u0004\u0002\u0002\u0089\u0011\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0005,\u0017\u0002\u008b\u008c\u0007",
    "\u0006\u0002\u0002\u008c\u008d\u0005\u0014\u000b\u0002\u008d\u008e\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0007\u0004\u0002\u0002\u008f\u0013\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0007\u000b\u0002\u0002\u0091\u0092\u0005",
    "\u0016\f\u0002\u0092\u0093\u0007\u000b\u0002\u0002\u0093\u0094\u0005",
    "\u0018\r\u0002\u0094\u0015\u0003\u0002\u0002\u0002\u0095\u0096\u0007",
    "\"\u0002\u0002\u0096\u0017\u0003\u0002\u0002\u0002\u0097\u009c\u0005",
    "\u001a\u000e\u0002\u0098\u0099\u0007\u0005\u0002\u0002\u0099\u009b\u0005",
    "\u001a\u000e\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009e\u0003",
    "\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u0019\u0003\u0002\u0002\u0002\u009e\u009c\u0003",
    "\u0002\u0002\u0002\u009f\u00a2\u00056\u001c\u0002\u00a0\u00a2\u0005",
    "> \u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002",
    "\u0002\u0002\u00a2\u001b\u0003\u0002\u0002\u0002\u00a3\u00a7\u0005 ",
    "\u0011\u0002\u00a4\u00a6\u0007&\u0002\u0002\u00a5\u00a4\u0003\u0002",
    "\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002",
    "\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00ad\u0003\u0002",
    "\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa\u00ac\u0005\u001e",
    "\u0010\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac\u00af\u0003\u0002",
    "\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002",
    "\u0002\u0002\u00ae\u00b3\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002",
    "\u0002\u0002\u00b0\u00b2\u0007&\u0002\u0002\u00b1\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b7\u0003\u0002",
    "\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b8\u0005\"",
    "\u0012\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002",
    "\u0002\u0002\u00b8\u001d\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007\f",
    "\u0002\u0002\u00ba\u00be\u0005.\u0018\u0002\u00bb\u00bd\u0007&\u0002",
    "\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bd\u00c0\u0003\u0002\u0002",
    "\u0002\u00be\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002",
    "\u0002\u00bf\u00c1\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0005\b\u0005\u0002\u00c2\u001f\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0007\r\u0002\u0002\u00c4\u00c8\u0005.\u0018\u0002",
    "\u00c5\u00c7\u0007&\u0002\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002",
    "\u00c7\u00ca\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002",
    "\u00ca\u00c8\u0003\u0002\u0002\u0002\u00cb\u00cc\u0005\b\u0005\u0002",
    "\u00cc!\u0003\u0002\u0002\u0002\u00cd\u00d1\u0007\u000e\u0002\u0002",
    "\u00ce\u00d0\u0007&\u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002",
    "\u00d0\u00d3\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d4\u0003\u0002\u0002\u0002",
    "\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d5\u0005\b\u0005\u0002",
    "\u00d5#\u0003\u0002\u0002\u0002\u00d6\u00d9\u0005,\u0017\u0002\u00d7",
    "\u00d8\u0007\u0006\u0002\u0002\u00d8\u00da\u0005> \u0002\u00d9\u00d7",
    "\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00db",
    "\u0003\u0002\u0002\u0002\u00db\u00dc\u0007\u0004\u0002\u0002\u00dc%",
    "\u0003\u0002\u0002\u0002\u00dd\u00de\u00056\u001c\u0002\u00de\u00df",
    "\u0007\u0006\u0002\u0002\u00df\u00e0\u00056\u001c\u0002\u00e0\u00e1",
    "\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007\u0004\u0002\u0002\u00e2\u00ea",
    "\u0003\u0002\u0002\u0002\u00e3\u00e4\u00056\u001c\u0002\u00e4\u00e5",
    "\u0007\u0006\u0002\u0002\u00e5\u00e6\u0005> \u0002\u00e6\u00e7\u0003",
    "\u0002\u0002\u0002\u00e7\u00e8\u0007\u0004\u0002\u0002\u00e8\u00ea\u0003",
    "\u0002\u0002\u0002\u00e9\u00dd\u0003\u0002\u0002\u0002\u00e9\u00e3\u0003",
    "\u0002\u0002\u0002\u00ea\'\u0003\u0002\u0002\u0002\u00eb\u00ec\u0005",
    ",\u0017\u0002\u00ec\u00ed\u0007\u0006\u0002\u0002\u00ed\u00ee\u0005",
    "6\u001c\u0002\u00ee\u00ef\u00058\u001d\u0002\u00ef\u00f0\u00052\u001a",
    "\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007\u0004\u0002",
    "\u0002\u00f2)\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007 \u0002\u0002",
    "\u00f4\u00f5\u0007\"\u0002\u0002\u00f5\u00f6\u0007!\u0002\u0002\u00f6",
    "+\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007\"\u0002\u0002\u00f8-\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0007\u000f\u0002\u0002\u00fa\u0100\u0005",
    "0\u0019\u0002\u00fb\u00fc\u0005<\u001f\u0002\u00fc\u00fd\u00050\u0019",
    "\u0002\u00fd\u00ff\u0003\u0002\u0002\u0002\u00fe\u00fb\u0003\u0002\u0002",
    "\u0002\u00ff\u0102\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002",
    "\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0103\u0003\u0002\u0002",
    "\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0103\u0104\u0007\u0010\u0002",
    "\u0002\u0104/\u0003\u0002\u0002\u0002\u0105\u0106\u00056\u001c\u0002",
    "\u0106\u0107\u0005:\u001e\u0002\u0107\u0108\u00056\u001c\u0002\u0108",
    "\u010f\u0003\u0002\u0002\u0002\u0109\u010a\u00056\u001c\u0002\u010a",
    "\u010b\u0005:\u001e\u0002\u010b\u010c\u0005> \u0002\u010c\u010f\u0003",
    "\u0002\u0002\u0002\u010d\u010f\u00056\u001c\u0002\u010e\u0105\u0003",
    "\u0002\u0002\u0002\u010e\u0109\u0003\u0002\u0002\u0002\u010e\u010d\u0003",
    "\u0002\u0002\u0002\u010f1\u0003\u0002\u0002\u0002\u0110\u0111\u0007",
    "\u000f\u0002\u0002\u0111\u0117\u00054\u001b\u0002\u0112\u0113\u0005",
    "<\u001f\u0002\u0113\u0114\u00054\u001b\u0002\u0114\u0116\u0003\u0002",
    "\u0002\u0002\u0115\u0112\u0003\u0002\u0002\u0002\u0116\u0119\u0003\u0002",
    "\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002",
    "\u0002\u0002\u0118\u011a\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0007\u0010\u0002\u0002\u011b3\u0003\u0002",
    "\u0002\u0002\u011c\u011d\u00056\u001c\u0002\u011d\u011e\u0005:\u001e",
    "\u0002\u011e\u011f\u00056\u001c\u0002\u011f\u0126\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u00056\u001c\u0002\u0121\u0122\u0005:\u001e\u0002",
    "\u0122\u0123\u0005> \u0002\u0123\u0126\u0003\u0002\u0002\u0002\u0124",
    "\u0126\u00056\u001c\u0002\u0125\u011c\u0003\u0002\u0002\u0002\u0125",
    "\u0120\u0003\u0002\u0002\u0002\u0125\u0124\u0003\u0002\u0002\u0002\u0126",
    "5\u0003\u0002\u0002\u0002\u0127\u012d\u0007\"\u0002\u0002\u0128\u0129",
    "\u0007\"\u0002\u0002\u0129\u012a\u0007\u001e\u0002\u0002\u012a\u012b",
    "\u0007#\u0002\u0002\u012b\u012d\u0007\u001f\u0002\u0002\u012c\u0127",
    "\u0003\u0002\u0002\u0002\u012c\u0128\u0003\u0002\u0002\u0002\u012d\u0138",
    "\u0003\u0002\u0002\u0002\u012e\u0134\u0007\u0011\u0002\u0002\u012f\u0135",
    "\u0007\"\u0002\u0002\u0130\u0131\u0007\"\u0002\u0002\u0131\u0132\u0007",
    "\u001e\u0002\u0002\u0132\u0133\u0007#\u0002\u0002\u0133\u0135\u0007",
    "\u001f\u0002\u0002\u0134\u012f\u0003\u0002\u0002\u0002\u0134\u0130\u0003",
    "\u0002\u0002\u0002\u0135\u0137\u0003\u0002\u0002\u0002\u0136\u012e\u0003",
    "\u0002\u0002\u0002\u0137\u013a\u0003\u0002\u0002\u0002\u0138\u0136\u0003",
    "\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u01397\u0003",
    "\u0002\u0002\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013b\u013c\t",
    "\u0002\u0002\u0002\u013c9\u0003\u0002\u0002\u0002\u013d\u013e\t\u0003",
    "\u0002\u0002\u013e;\u0003\u0002\u0002\u0002\u013f\u0140\t\u0004\u0002",
    "\u0002\u0140=\u0003\u0002\u0002\u0002\u0141\u014b\u0003\u0002\u0002",
    "\u0002\u0142\u014b\u0007#\u0002\u0002\u0143\u014b\u0007\"\u0002\u0002",
    "\u0144\u014b\u0007%\u0002\u0002\u0145\u014b\u0007$\u0002\u0002\u0146",
    "\u0147\u0007\u000f\u0002\u0002\u0147\u0148\u0005> \u0002\u0148\u0149",
    "\u0007\u0010\u0002\u0002\u0149\u014b\u0003\u0002\u0002\u0002\u014a\u0141",
    "\u0003\u0002\u0002\u0002\u014a\u0142\u0003\u0002\u0002\u0002\u014a\u0143",
    "\u0003\u0002\u0002\u0002\u014a\u0144\u0003\u0002\u0002\u0002\u014a\u0145",
    "\u0003\u0002\u0002\u0002\u014a\u0146\u0003\u0002\u0002\u0002\u014b?",
    "\u0003\u0002\u0002\u0002\u001cFNXek}\u0085\u009c\u00a1\u00a7\u00ad\u00b3",
    "\u00b7\u00be\u00c8\u00d1\u00d9\u00e9\u0100\u010e\u0117\u0125\u012c\u0134",
    "\u0138\u014a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'dslname ='", "';'", "','", "'='", "'{'", "'}'", 
                     "'return'", "'save'", "'%'", "'elseif'", "'if'", "'else'", 
                     "'('", "')'", "'.'", "'where'", "'any'", "'=='", "'!='", 
                     "'<='", "'>='", "'AND'", "'OR'", "'*'", "'/'", "'+'", 
                     "'-'", "'['", "']'", "'<'", "'>'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "MUL", "DIV", 
                      "ADD", "SUB", "LSQUARE", "RSQUARE", "GT", "LT", "ID", 
                      "INT", "STRING", "FLOAT", "NEWLINE", "WS" ];

var ruleNames =  [ "prog", "inputs", "input", "block", "returnkeyword", 
                   "returnvalue", "stat", "save", "dslAssignment", "embeddeddsl", 
                   "dslName", "variableAssignments", "variableAssignment", 
                   "ifconditionexpression", "elseifexpression", "ifexpression", 
                   "elseexpression", "simplevariabledecl", "fieldassignment", 
                   "vardeclwithkeywords", "model", "variable", "clauses", 
                   "clause", "enumrableclauses", "enumrableclause", "field", 
                   "keyword", "operator", "logicaloperator", "expr" ];

function RealSocialableGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RealSocialableGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
RealSocialableGrammarParser.prototype.constructor = RealSocialableGrammarParser;

Object.defineProperty(RealSocialableGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RealSocialableGrammarParser.EOF = antlr4.Token.EOF;
RealSocialableGrammarParser.T__0 = 1;
RealSocialableGrammarParser.T__1 = 2;
RealSocialableGrammarParser.T__2 = 3;
RealSocialableGrammarParser.T__3 = 4;
RealSocialableGrammarParser.T__4 = 5;
RealSocialableGrammarParser.T__5 = 6;
RealSocialableGrammarParser.T__6 = 7;
RealSocialableGrammarParser.T__7 = 8;
RealSocialableGrammarParser.T__8 = 9;
RealSocialableGrammarParser.T__9 = 10;
RealSocialableGrammarParser.T__10 = 11;
RealSocialableGrammarParser.T__11 = 12;
RealSocialableGrammarParser.T__12 = 13;
RealSocialableGrammarParser.T__13 = 14;
RealSocialableGrammarParser.T__14 = 15;
RealSocialableGrammarParser.T__15 = 16;
RealSocialableGrammarParser.T__16 = 17;
RealSocialableGrammarParser.T__17 = 18;
RealSocialableGrammarParser.T__18 = 19;
RealSocialableGrammarParser.T__19 = 20;
RealSocialableGrammarParser.T__20 = 21;
RealSocialableGrammarParser.T__21 = 22;
RealSocialableGrammarParser.T__22 = 23;
RealSocialableGrammarParser.MUL = 24;
RealSocialableGrammarParser.DIV = 25;
RealSocialableGrammarParser.ADD = 26;
RealSocialableGrammarParser.SUB = 27;
RealSocialableGrammarParser.LSQUARE = 28;
RealSocialableGrammarParser.RSQUARE = 29;
RealSocialableGrammarParser.GT = 30;
RealSocialableGrammarParser.LT = 31;
RealSocialableGrammarParser.ID = 32;
RealSocialableGrammarParser.INT = 33;
RealSocialableGrammarParser.STRING = 34;
RealSocialableGrammarParser.FLOAT = 35;
RealSocialableGrammarParser.NEWLINE = 36;
RealSocialableGrammarParser.WS = 37;

RealSocialableGrammarParser.RULE_prog = 0;
RealSocialableGrammarParser.RULE_inputs = 1;
RealSocialableGrammarParser.RULE_input = 2;
RealSocialableGrammarParser.RULE_block = 3;
RealSocialableGrammarParser.RULE_returnkeyword = 4;
RealSocialableGrammarParser.RULE_returnvalue = 5;
RealSocialableGrammarParser.RULE_stat = 6;
RealSocialableGrammarParser.RULE_save = 7;
RealSocialableGrammarParser.RULE_dslAssignment = 8;
RealSocialableGrammarParser.RULE_embeddeddsl = 9;
RealSocialableGrammarParser.RULE_dslName = 10;
RealSocialableGrammarParser.RULE_variableAssignments = 11;
RealSocialableGrammarParser.RULE_variableAssignment = 12;
RealSocialableGrammarParser.RULE_ifconditionexpression = 13;
RealSocialableGrammarParser.RULE_elseifexpression = 14;
RealSocialableGrammarParser.RULE_ifexpression = 15;
RealSocialableGrammarParser.RULE_elseexpression = 16;
RealSocialableGrammarParser.RULE_simplevariabledecl = 17;
RealSocialableGrammarParser.RULE_fieldassignment = 18;
RealSocialableGrammarParser.RULE_vardeclwithkeywords = 19;
RealSocialableGrammarParser.RULE_model = 20;
RealSocialableGrammarParser.RULE_variable = 21;
RealSocialableGrammarParser.RULE_clauses = 22;
RealSocialableGrammarParser.RULE_clause = 23;
RealSocialableGrammarParser.RULE_enumrableclauses = 24;
RealSocialableGrammarParser.RULE_enumrableclause = 25;
RealSocialableGrammarParser.RULE_field = 26;
RealSocialableGrammarParser.RULE_keyword = 27;
RealSocialableGrammarParser.RULE_operator = 28;
RealSocialableGrammarParser.RULE_logicaloperator = 29;
RealSocialableGrammarParser.RULE_expr = 30;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.ID = function() {
    return this.getToken(RealSocialableGrammarParser.ID, 0);
};

ProgContext.prototype.inputs = function() {
    return this.getTypedRuleContext(InputsContext,0);
};

ProgContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ProgContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RealSocialableGrammarParser.NEWLINE);
    } else {
        return this.getToken(RealSocialableGrammarParser.NEWLINE, i);
    }
};


ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ProgContext = ProgContext;

RealSocialableGrammarParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RealSocialableGrammarParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(RealSocialableGrammarParser.T__0);
        this.state = 63;
        this.match(RealSocialableGrammarParser.ID);
        this.state = 64;
        this.match(RealSocialableGrammarParser.T__1);
        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.NEWLINE) {
            this.state = 65;
            this.match(RealSocialableGrammarParser.NEWLINE);
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 71;
        this.inputs();
        this.state = 72;
        this.match(RealSocialableGrammarParser.T__1);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.NEWLINE) {
            this.state = 73;
            this.match(RealSocialableGrammarParser.NEWLINE);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 79;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InputsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_inputs;
    return this;
}

InputsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputsContext.prototype.constructor = InputsContext;

InputsContext.prototype.input = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InputContext);
    } else {
        return this.getTypedRuleContext(InputContext,i);
    }
};

InputsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitInputs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.InputsContext = InputsContext;

RealSocialableGrammarParser.prototype.inputs = function() {

    var localctx = new InputsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RealSocialableGrammarParser.RULE_inputs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.input();
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.T__2) {
            this.state = 82;
            this.match(RealSocialableGrammarParser.T__2);
            this.state = 83;
            this.input();
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_input;
    return this;
}

InputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputContext.prototype.constructor = InputContext;

InputContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

InputContext.prototype.model = function() {
    return this.getTypedRuleContext(ModelContext,0);
};

InputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitInput(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.InputContext = InputContext;

RealSocialableGrammarParser.prototype.input = function() {

    var localctx = new InputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RealSocialableGrammarParser.RULE_input);
    try {
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 89;
            this.variable();
            this.state = 90;
            this.match(RealSocialableGrammarParser.T__3);
            this.state = 91;
            this.model();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.variable();
            this.state = 94;
            this.match(RealSocialableGrammarParser.T__3);
            this.state = 95;
            this.match(RealSocialableGrammarParser.LSQUARE);
            this.state = 96;
            this.model();
            this.state = 97;
            this.match(RealSocialableGrammarParser.RSQUARE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.BlockContext = BlockContext;

RealSocialableGrammarParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RealSocialableGrammarParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(RealSocialableGrammarParser.T__4);
        this.state = 103; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 102;
            this.stat();
            this.state = 105; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RealSocialableGrammarParser.T__6 - 7)) | (1 << (RealSocialableGrammarParser.T__7 - 7)) | (1 << (RealSocialableGrammarParser.T__10 - 7)) | (1 << (RealSocialableGrammarParser.ID - 7)) | (1 << (RealSocialableGrammarParser.NEWLINE - 7)))) !== 0));
        this.state = 107;
        this.match(RealSocialableGrammarParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnkeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_returnkeyword;
    return this;
}

ReturnkeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnkeywordContext.prototype.constructor = ReturnkeywordContext;


ReturnkeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitReturnkeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ReturnkeywordContext = ReturnkeywordContext;

RealSocialableGrammarParser.prototype.returnkeyword = function() {

    var localctx = new ReturnkeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RealSocialableGrammarParser.RULE_returnkeyword);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(RealSocialableGrammarParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_returnvalue;
    return this;
}

ReturnvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnvalueContext.prototype.constructor = ReturnvalueContext;

ReturnvalueContext.prototype.returnkeyword = function() {
    return this.getTypedRuleContext(ReturnkeywordContext,0);
};

ReturnvalueContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

ReturnvalueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitReturnvalue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ReturnvalueContext = ReturnvalueContext;

RealSocialableGrammarParser.prototype.returnvalue = function() {

    var localctx = new ReturnvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RealSocialableGrammarParser.RULE_returnvalue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.returnkeyword();
        this.state = 112;
        this.field();
        this.state = 113;
        this.match(RealSocialableGrammarParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.simplevariabledecl = function() {
    return this.getTypedRuleContext(SimplevariabledeclContext,0);
};

StatContext.prototype.dslAssignment = function() {
    return this.getTypedRuleContext(DslAssignmentContext,0);
};

StatContext.prototype.fieldassignment = function() {
    return this.getTypedRuleContext(FieldassignmentContext,0);
};

StatContext.prototype.vardeclwithkeywords = function() {
    return this.getTypedRuleContext(VardeclwithkeywordsContext,0);
};

StatContext.prototype.returnvalue = function() {
    return this.getTypedRuleContext(ReturnvalueContext,0);
};

StatContext.prototype.save = function() {
    return this.getTypedRuleContext(SaveContext,0);
};

StatContext.prototype.ifconditionexpression = function() {
    return this.getTypedRuleContext(IfconditionexpressionContext,0);
};

StatContext.prototype.NEWLINE = function() {
    return this.getToken(RealSocialableGrammarParser.NEWLINE, 0);
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.StatContext = StatContext;

RealSocialableGrammarParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RealSocialableGrammarParser.RULE_stat);
    try {
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 115;
            this.simplevariabledecl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 116;
            this.dslAssignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.fieldassignment();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 118;
            this.vardeclwithkeywords();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 119;
            this.returnvalue();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 120;
            this.save();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 121;
            this.ifconditionexpression();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 122;
            this.match(RealSocialableGrammarParser.NEWLINE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SaveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_save;
    return this;
}

SaveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SaveContext.prototype.constructor = SaveContext;

SaveContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

SaveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitSave(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.SaveContext = SaveContext;

RealSocialableGrammarParser.prototype.save = function() {

    var localctx = new SaveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RealSocialableGrammarParser.RULE_save);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(RealSocialableGrammarParser.T__7);
        this.state = 126;
        this.variable();
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.T__2) {
            this.state = 127;
            this.match(RealSocialableGrammarParser.T__2);
            this.state = 128;
            this.variable();
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 134;
        this.match(RealSocialableGrammarParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DslAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_dslAssignment;
    return this;
}

DslAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DslAssignmentContext.prototype.constructor = DslAssignmentContext;

DslAssignmentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

DslAssignmentContext.prototype.embeddeddsl = function() {
    return this.getTypedRuleContext(EmbeddeddslContext,0);
};

DslAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitDslAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.DslAssignmentContext = DslAssignmentContext;

RealSocialableGrammarParser.prototype.dslAssignment = function() {

    var localctx = new DslAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RealSocialableGrammarParser.RULE_dslAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.variable();

        this.state = 137;
        this.match(RealSocialableGrammarParser.T__3);
        this.state = 138;
        this.embeddeddsl();
        this.state = 140;
        this.match(RealSocialableGrammarParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmbeddeddslContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_embeddeddsl;
    return this;
}

EmbeddeddslContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmbeddeddslContext.prototype.constructor = EmbeddeddslContext;

EmbeddeddslContext.prototype.dslName = function() {
    return this.getTypedRuleContext(DslNameContext,0);
};

EmbeddeddslContext.prototype.variableAssignments = function() {
    return this.getTypedRuleContext(VariableAssignmentsContext,0);
};

EmbeddeddslContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitEmbeddeddsl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.EmbeddeddslContext = EmbeddeddslContext;

RealSocialableGrammarParser.prototype.embeddeddsl = function() {

    var localctx = new EmbeddeddslContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RealSocialableGrammarParser.RULE_embeddeddsl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(RealSocialableGrammarParser.T__8);
        this.state = 143;
        this.dslName();
        this.state = 144;
        this.match(RealSocialableGrammarParser.T__8);
        this.state = 145;
        this.variableAssignments();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DslNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_dslName;
    return this;
}

DslNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DslNameContext.prototype.constructor = DslNameContext;

DslNameContext.prototype.ID = function() {
    return this.getToken(RealSocialableGrammarParser.ID, 0);
};

DslNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitDslName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.DslNameContext = DslNameContext;

RealSocialableGrammarParser.prototype.dslName = function() {

    var localctx = new DslNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RealSocialableGrammarParser.RULE_dslName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(RealSocialableGrammarParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableAssignmentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_variableAssignments;
    return this;
}

VariableAssignmentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableAssignmentsContext.prototype.constructor = VariableAssignmentsContext;

VariableAssignmentsContext.prototype.variableAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableAssignmentContext);
    } else {
        return this.getTypedRuleContext(VariableAssignmentContext,i);
    }
};

VariableAssignmentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitVariableAssignments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.VariableAssignmentsContext = VariableAssignmentsContext;

RealSocialableGrammarParser.prototype.variableAssignments = function() {

    var localctx = new VariableAssignmentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RealSocialableGrammarParser.RULE_variableAssignments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.variableAssignment();
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.T__2) {
            this.state = 150;
            this.match(RealSocialableGrammarParser.T__2);
            this.state = 151;
            this.variableAssignment();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_variableAssignment;
    return this;
}

VariableAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableAssignmentContext.prototype.constructor = VariableAssignmentContext;

VariableAssignmentContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

VariableAssignmentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

VariableAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitVariableAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.VariableAssignmentContext = VariableAssignmentContext;

RealSocialableGrammarParser.prototype.variableAssignment = function() {

    var localctx = new VariableAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, RealSocialableGrammarParser.RULE_variableAssignment);
    try {
        this.state = 159;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.field();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 158;
            this.expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfconditionexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_ifconditionexpression;
    return this;
}

IfconditionexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfconditionexpressionContext.prototype.constructor = IfconditionexpressionContext;

IfconditionexpressionContext.prototype.ifexpression = function() {
    return this.getTypedRuleContext(IfexpressionContext,0);
};

IfconditionexpressionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RealSocialableGrammarParser.NEWLINE);
    } else {
        return this.getToken(RealSocialableGrammarParser.NEWLINE, i);
    }
};


IfconditionexpressionContext.prototype.elseifexpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseifexpressionContext);
    } else {
        return this.getTypedRuleContext(ElseifexpressionContext,i);
    }
};

IfconditionexpressionContext.prototype.elseexpression = function() {
    return this.getTypedRuleContext(ElseexpressionContext,0);
};

IfconditionexpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitIfconditionexpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.IfconditionexpressionContext = IfconditionexpressionContext;

RealSocialableGrammarParser.prototype.ifconditionexpression = function() {

    var localctx = new IfconditionexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, RealSocialableGrammarParser.RULE_ifconditionexpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.ifexpression();
        this.state = 165;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 162;
                this.match(RealSocialableGrammarParser.NEWLINE); 
            }
            this.state = 167;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.T__9) {
            this.state = 168;
            this.elseifexpression();
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 177;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 174;
                this.match(RealSocialableGrammarParser.NEWLINE); 
            }
            this.state = 179;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 181;
        _la = this._input.LA(1);
        if(_la===RealSocialableGrammarParser.T__11) {
            this.state = 180;
            this.elseexpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseifexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_elseifexpression;
    return this;
}

ElseifexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseifexpressionContext.prototype.constructor = ElseifexpressionContext;

ElseifexpressionContext.prototype.clauses = function() {
    return this.getTypedRuleContext(ClausesContext,0);
};

ElseifexpressionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ElseifexpressionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RealSocialableGrammarParser.NEWLINE);
    } else {
        return this.getToken(RealSocialableGrammarParser.NEWLINE, i);
    }
};


ElseifexpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitElseifexpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ElseifexpressionContext = ElseifexpressionContext;

RealSocialableGrammarParser.prototype.elseifexpression = function() {

    var localctx = new ElseifexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, RealSocialableGrammarParser.RULE_elseifexpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(RealSocialableGrammarParser.T__9);
        this.state = 184;
        this.clauses();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.NEWLINE) {
            this.state = 185;
            this.match(RealSocialableGrammarParser.NEWLINE);
            this.state = 190;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 191;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_ifexpression;
    return this;
}

IfexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfexpressionContext.prototype.constructor = IfexpressionContext;

IfexpressionContext.prototype.clauses = function() {
    return this.getTypedRuleContext(ClausesContext,0);
};

IfexpressionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

IfexpressionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RealSocialableGrammarParser.NEWLINE);
    } else {
        return this.getToken(RealSocialableGrammarParser.NEWLINE, i);
    }
};


IfexpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitIfexpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.IfexpressionContext = IfexpressionContext;

RealSocialableGrammarParser.prototype.ifexpression = function() {

    var localctx = new IfexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, RealSocialableGrammarParser.RULE_ifexpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(RealSocialableGrammarParser.T__10);
        this.state = 194;
        this.clauses();
        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.NEWLINE) {
            this.state = 195;
            this.match(RealSocialableGrammarParser.NEWLINE);
            this.state = 200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 201;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_elseexpression;
    return this;
}

ElseexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseexpressionContext.prototype.constructor = ElseexpressionContext;

ElseexpressionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ElseexpressionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RealSocialableGrammarParser.NEWLINE);
    } else {
        return this.getToken(RealSocialableGrammarParser.NEWLINE, i);
    }
};


ElseexpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitElseexpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ElseexpressionContext = ElseexpressionContext;

RealSocialableGrammarParser.prototype.elseexpression = function() {

    var localctx = new ElseexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, RealSocialableGrammarParser.RULE_elseexpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(RealSocialableGrammarParser.T__11);
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.NEWLINE) {
            this.state = 204;
            this.match(RealSocialableGrammarParser.NEWLINE);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 210;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimplevariabledeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_simplevariabledecl;
    return this;
}

SimplevariabledeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimplevariabledeclContext.prototype.constructor = SimplevariabledeclContext;

SimplevariabledeclContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

SimplevariabledeclContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

SimplevariabledeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitSimplevariabledecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.SimplevariabledeclContext = SimplevariabledeclContext;

RealSocialableGrammarParser.prototype.simplevariabledecl = function() {

    var localctx = new SimplevariabledeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, RealSocialableGrammarParser.RULE_simplevariabledecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.variable();
        this.state = 215;
        _la = this._input.LA(1);
        if(_la===RealSocialableGrammarParser.T__3) {
            this.state = 213;
            this.match(RealSocialableGrammarParser.T__3);
            this.state = 214;
            this.expr();
        }

        this.state = 217;
        this.match(RealSocialableGrammarParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldassignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_fieldassignment;
    return this;
}

FieldassignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldassignmentContext.prototype.constructor = FieldassignmentContext;

FieldassignmentContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

FieldassignmentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FieldassignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitFieldassignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.FieldassignmentContext = FieldassignmentContext;

RealSocialableGrammarParser.prototype.fieldassignment = function() {

    var localctx = new FieldassignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, RealSocialableGrammarParser.RULE_fieldassignment);
    try {
        this.state = 231;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 219;
            this.field();

            this.state = 220;
            this.match(RealSocialableGrammarParser.T__3);
            this.state = 221;
            this.field();
            this.state = 223;
            this.match(RealSocialableGrammarParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            this.field();

            this.state = 226;
            this.match(RealSocialableGrammarParser.T__3);
            this.state = 227;
            this.expr();
            this.state = 229;
            this.match(RealSocialableGrammarParser.T__1);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VardeclwithkeywordsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_vardeclwithkeywords;
    return this;
}

VardeclwithkeywordsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VardeclwithkeywordsContext.prototype.constructor = VardeclwithkeywordsContext;

VardeclwithkeywordsContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

VardeclwithkeywordsContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

VardeclwithkeywordsContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

VardeclwithkeywordsContext.prototype.enumrableclauses = function() {
    return this.getTypedRuleContext(EnumrableclausesContext,0);
};

VardeclwithkeywordsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitVardeclwithkeywords(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.VardeclwithkeywordsContext = VardeclwithkeywordsContext;

RealSocialableGrammarParser.prototype.vardeclwithkeywords = function() {

    var localctx = new VardeclwithkeywordsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, RealSocialableGrammarParser.RULE_vardeclwithkeywords);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.variable();

        this.state = 234;
        this.match(RealSocialableGrammarParser.T__3);
        this.state = 235;
        this.field();
        this.state = 236;
        this.keyword();
        this.state = 237;
        this.enumrableclauses();
        this.state = 239;
        this.match(RealSocialableGrammarParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_model;
    return this;
}

ModelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelContext.prototype.constructor = ModelContext;

ModelContext.prototype.ID = function() {
    return this.getToken(RealSocialableGrammarParser.ID, 0);
};

ModelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitModel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ModelContext = ModelContext;

RealSocialableGrammarParser.prototype.model = function() {

    var localctx = new ModelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, RealSocialableGrammarParser.RULE_model);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(RealSocialableGrammarParser.GT);
        this.state = 242;
        this.match(RealSocialableGrammarParser.ID);
        this.state = 243;
        this.match(RealSocialableGrammarParser.LT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(RealSocialableGrammarParser.ID, 0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.VariableContext = VariableContext;

RealSocialableGrammarParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, RealSocialableGrammarParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(RealSocialableGrammarParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClausesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_clauses;
    return this;
}

ClausesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClausesContext.prototype.constructor = ClausesContext;

ClausesContext.prototype.clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseContext);
    } else {
        return this.getTypedRuleContext(ClauseContext,i);
    }
};

ClausesContext.prototype.logicaloperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogicaloperatorContext);
    } else {
        return this.getTypedRuleContext(LogicaloperatorContext,i);
    }
};

ClausesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitClauses(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ClausesContext = ClausesContext;

RealSocialableGrammarParser.prototype.clauses = function() {

    var localctx = new ClausesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, RealSocialableGrammarParser.RULE_clauses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(RealSocialableGrammarParser.T__12);
        this.state = 248;
        this.clause();
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.T__21 || _la===RealSocialableGrammarParser.T__22) {
            this.state = 249;
            this.logicaloperator();
            this.state = 250;
            this.clause();
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 257;
        this.match(RealSocialableGrammarParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_clause;
    return this;
}

ClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseContext.prototype.constructor = ClauseContext;

ClauseContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

ClauseContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

ClauseContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ClauseContext = ClauseContext;

RealSocialableGrammarParser.prototype.clause = function() {

    var localctx = new ClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, RealSocialableGrammarParser.RULE_clause);
    try {
        this.state = 268;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 259;
            this.field();
            this.state = 260;
            this.operator();
            this.state = 261;
            this.field();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 263;
            this.field();
            this.state = 264;
            this.operator();
            this.state = 265;
            this.expr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 267;
            this.field();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumrableclausesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_enumrableclauses;
    return this;
}

EnumrableclausesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumrableclausesContext.prototype.constructor = EnumrableclausesContext;

EnumrableclausesContext.prototype.enumrableclause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumrableclauseContext);
    } else {
        return this.getTypedRuleContext(EnumrableclauseContext,i);
    }
};

EnumrableclausesContext.prototype.logicaloperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogicaloperatorContext);
    } else {
        return this.getTypedRuleContext(LogicaloperatorContext,i);
    }
};

EnumrableclausesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitEnumrableclauses(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.EnumrableclausesContext = EnumrableclausesContext;

RealSocialableGrammarParser.prototype.enumrableclauses = function() {

    var localctx = new EnumrableclausesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, RealSocialableGrammarParser.RULE_enumrableclauses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(RealSocialableGrammarParser.T__12);
        this.state = 271;
        this.enumrableclause();
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.T__21 || _la===RealSocialableGrammarParser.T__22) {
            this.state = 272;
            this.logicaloperator();
            this.state = 273;
            this.enumrableclause();
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 280;
        this.match(RealSocialableGrammarParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumrableclauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_enumrableclause;
    return this;
}

EnumrableclauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumrableclauseContext.prototype.constructor = EnumrableclauseContext;

EnumrableclauseContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

EnumrableclauseContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

EnumrableclauseContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

EnumrableclauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitEnumrableclause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.EnumrableclauseContext = EnumrableclauseContext;

RealSocialableGrammarParser.prototype.enumrableclause = function() {

    var localctx = new EnumrableclauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, RealSocialableGrammarParser.RULE_enumrableclause);
    try {
        this.state = 291;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 282;
            this.field();
            this.state = 283;
            this.operator();
            this.state = 284;
            this.field();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
            this.field();
            this.state = 287;
            this.operator();
            this.state = 288;
            this.expr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 290;
            this.field();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RealSocialableGrammarParser.ID);
    } else {
        return this.getToken(RealSocialableGrammarParser.ID, i);
    }
};


FieldContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RealSocialableGrammarParser.INT);
    } else {
        return this.getToken(RealSocialableGrammarParser.INT, i);
    }
};


FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.FieldContext = FieldContext;

RealSocialableGrammarParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, RealSocialableGrammarParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.state = 293;
            this.match(RealSocialableGrammarParser.ID);
            break;

        case 2:
            this.state = 294;
            this.match(RealSocialableGrammarParser.ID);
            this.state = 295;
            this.match(RealSocialableGrammarParser.LSQUARE);
            this.state = 296;
            this.match(RealSocialableGrammarParser.INT);
            this.state = 297;
            this.match(RealSocialableGrammarParser.RSQUARE);
            break;

        }
        this.state = 310;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RealSocialableGrammarParser.T__14) {
            this.state = 300;
            this.match(RealSocialableGrammarParser.T__14);
            this.state = 306;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
            switch(la_) {
            case 1:
                this.state = 301;
                this.match(RealSocialableGrammarParser.ID);
                break;

            case 2:
                this.state = 302;
                this.match(RealSocialableGrammarParser.ID);
                this.state = 303;
                this.match(RealSocialableGrammarParser.LSQUARE);
                this.state = 304;
                this.match(RealSocialableGrammarParser.INT);
                this.state = 305;
                this.match(RealSocialableGrammarParser.RSQUARE);
                break;

            }
            this.state = 312;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;


KeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitKeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.KeywordContext = KeywordContext;

RealSocialableGrammarParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, RealSocialableGrammarParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        _la = this._input.LA(1);
        if(!(_la===RealSocialableGrammarParser.T__15 || _la===RealSocialableGrammarParser.T__16)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;


OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.OperatorContext = OperatorContext;

RealSocialableGrammarParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, RealSocialableGrammarParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RealSocialableGrammarParser.T__3) | (1 << RealSocialableGrammarParser.T__17) | (1 << RealSocialableGrammarParser.T__18) | (1 << RealSocialableGrammarParser.T__19) | (1 << RealSocialableGrammarParser.T__20) | (1 << RealSocialableGrammarParser.GT) | (1 << RealSocialableGrammarParser.LT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogicaloperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_logicaloperator;
    return this;
}

LogicaloperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicaloperatorContext.prototype.constructor = LogicaloperatorContext;


LogicaloperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitLogicaloperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.LogicaloperatorContext = LogicaloperatorContext;

RealSocialableGrammarParser.prototype.logicaloperator = function() {

    var localctx = new LogicaloperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, RealSocialableGrammarParser.RULE_logicaloperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        _la = this._input.LA(1);
        if(!(_la===RealSocialableGrammarParser.T__21 || _la===RealSocialableGrammarParser.T__22)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RealSocialableGrammarParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.INT = function() {
    return this.getToken(RealSocialableGrammarParser.INT, 0);
};

ExprContext.prototype.ID = function() {
    return this.getToken(RealSocialableGrammarParser.ID, 0);
};

ExprContext.prototype.FLOAT = function() {
    return this.getToken(RealSocialableGrammarParser.FLOAT, 0);
};

ExprContext.prototype.STRING = function() {
    return this.getToken(RealSocialableGrammarParser.STRING, 0);
};

ExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RealSocialableGrammarVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RealSocialableGrammarParser.ExprContext = ExprContext;

RealSocialableGrammarParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, RealSocialableGrammarParser.RULE_expr);
    try {
        this.state = 328;
        switch(this._input.LA(1)) {
        case RealSocialableGrammarParser.T__1:
        case RealSocialableGrammarParser.T__2:
        case RealSocialableGrammarParser.T__13:
        case RealSocialableGrammarParser.T__21:
        case RealSocialableGrammarParser.T__22:
            this.enterOuterAlt(localctx, 1);

            break;
        case RealSocialableGrammarParser.INT:
            this.enterOuterAlt(localctx, 2);
            this.state = 320;
            this.match(RealSocialableGrammarParser.INT);
            break;
        case RealSocialableGrammarParser.ID:
            this.enterOuterAlt(localctx, 3);
            this.state = 321;
            this.match(RealSocialableGrammarParser.ID);
            break;
        case RealSocialableGrammarParser.FLOAT:
            this.enterOuterAlt(localctx, 4);
            this.state = 322;
            this.match(RealSocialableGrammarParser.FLOAT);
            break;
        case RealSocialableGrammarParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 323;
            this.match(RealSocialableGrammarParser.STRING);
            break;
        case RealSocialableGrammarParser.T__12:
            this.enterOuterAlt(localctx, 6);
            this.state = 324;
            this.match(RealSocialableGrammarParser.T__12);
            this.state = 325;
            this.expr();
            this.state = 326;
            this.match(RealSocialableGrammarParser.T__13);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RealSocialableGrammarParser = RealSocialableGrammarParser;
