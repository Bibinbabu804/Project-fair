import React from 'react'
import { Card, CardBody } from 'react-bootstrap'


function View() {
  return (
    <div>


<Card className="mb-3">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <span className="text-muted">Media app</span>
                <div>
                  {/* Project action icons */}
                  <i className="fas fa-edit text-primary mx-2"></i>
                  <i className="fas fa-globe text-warning mx-2"></i>
                  <i className="fab fa-github text-dark mx-2"></i>
                  <i className="fas fa-trash text-danger mx-2"></i>
                </div>
              </Card.Body>
            </Card>




    </div>
  )
}

export default View