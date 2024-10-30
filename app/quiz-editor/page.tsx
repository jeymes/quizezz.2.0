'use client';

import { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: '1',
        position: { x: 50, y: 50 },
        data: {
            label: 'Pergunta 1',
            question: 'Qual é a capital da França?',
            options: ['Paris', 'Londres', 'Berlim'],
        },
    },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function QuizEditor() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    // Função para conectar os nós
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    // Função para adicionar uma nova pergunta
    const addQuestion = () => {
        const newNodeId = (nodes.length + 1).toString();
        const newNode = {
            id: newNodeId,
            position: {
                x: Math.random() * 250,
                y: Math.random() * 250,
            },
            data: {
                label: `Pergunta ${newNodeId}`,
                question: `Nova pergunta ${newNodeId}`,
                options: ['Opção A', 'Opção B', 'Opção C'],
            },
        };
        setNodes((nds) => [...nds, newNode]);
    };

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <button
                onClick={addQuestion}
                style={{
                    position: 'absolute',
                    zIndex: 10,
                    padding: '10px',
                    top: 10,
                    left: 10,
                }}
            >
                Adicionar Pagina
            </button>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
}

export default QuizEditor;
